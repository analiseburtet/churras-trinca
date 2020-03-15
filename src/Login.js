import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="flex w-100 justify-center">
    <div className="flex w-max w-100 justify-center flex-wrap ba b--light-gray pa3 mb5 mt3 mr3 ml3 br4 shadow-5">
      <p className="b">Entrar</p>
      <form onSubmit={handleLogin} className="flex flex-column w-100">
        <input className="flex w-100 justify-center flex-wrap ba b--light-gray pa3 mb2 mt2   br4 shadow-5" name="email" type="email" placeholder="E-mail" />
        <input className="flex w-100 justify-center flex-wrap ba b--light-gray pa3 mb2 mt2   br4 shadow-5" name="password" type="password" placeholder="Senha" />
        <button className="b--orange bg-orange ba b--light-gray w-25 sm pa3 mr2 mb2 mt2 br4 white b shadow-4" type="submit">Log in</button>
      </form>
    </div>
    </div>
  );
};

export default withRouter(Login);
