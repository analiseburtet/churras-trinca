import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Eventos from "./components/eventos"
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <div className="vh-100">
    <Header/>
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/eventos" component={Eventos} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
    <Footer/>
    </div>
  );
};

export default App;
