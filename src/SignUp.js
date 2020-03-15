import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import app from "./base";
import './components/eventos.css'

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="flex w-100 justify-center">
    <div className="flex w-max w-100 justify-center flex-wrap ba b--light-gray pa3 mb5 mt3 mr3 ml3 br4 shadow-5">
      <p className="b">Primeiro Acesso? Cadastre seu e-mail abaixo. <Link to="/login" className="orange link"> Já tenho cadastro.</Link></p>
      <form onSubmit={handleSignUp} className="flex flex-column w-100">
          <input className="flex w-100 justify-center flex-wrap ba b--light-gray pa3 mb2 mt2   br4 shadow-5" name="email" type="email" placeholder="E-mail" />
          <input className="flex w-100 justify-center flex-wrap ba b--light-gray pa3 mb2 mt2   br4 shadow-5" name="password" type="password" placeholder="Senha" />
        <button className="b--orange bg-orange ba b--light-gray w-25 sm pa3 mr2 mb2 mt2 br4 white b shadow-4" type="submit">Entrar</button>
      </form>
    </div>
    </div>
  );
};

export default withRouter(SignUp);
