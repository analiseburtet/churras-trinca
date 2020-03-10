import React from "react";
import app from "./base";
import AddEventButton from "./components/addEventButton"

const Home = () => {
  return (
    <div>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      ## map nos cards dos eventos que ja existem para printalos.
      <AddEventButton/>
    </div>
  );
};

export default Home;
