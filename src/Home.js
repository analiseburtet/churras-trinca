import React, { useState, useEffect } from "react";
import app from "./base";
import AddEventButton from "./components/addEventButton"
import firebase from './base.js'

function useTimes() {
  const [times, setTimes] = useState([{
    id: "id",
    Evento: "evento"
  }])
  useEffect(()=>{
    firebase
      .firestore()
      .collection('eventos')
      .onSnapshot((snapshot) => {
        const newTimes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setTimes(newTimes)
      })
  },[])
  return times
}
const Home = () => {
  const times = useTimes()
  return (
    <div className="">
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      <div className="flex flex-wrap">
        {times.map((i)=>
          <li className="outline w-25 pa3 mr2" key={i.id}>
          {i.Evento}
          </li> 
        )}
      <li className="outline w-25 pa3 mr2"><AddEventButton/></li>
      </div>
    </div>
  );
};

export default Home;
