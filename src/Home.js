import React, { useState, useEffect } from "react";
import AddEventButton from "./components/addEventButton"
import firebase from './base.js'

function useTimes() {
  const [times, setTimes] = useState([{
    id: "id",
    Evento: "evento"
  }])
  useEffect(()=>{
    //todo -> callback to unsubscribe
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
    <div className="w-100 flex">
      <div className="flex flex-wrap justify-center">
        {times.map((i)=>
          <li className="ba b--light-gray w-25 pa3 mr2 mb2 mt2 br4 list b shadow-4" key={i.id}>
          {i.Evento}{i.title}
          </li> 
        )}
      <li className="ba b--light-gray w-25 pa3 mr2 mb2 mt2 br4 list shadow-4"><AddEventButton/></li>
      </div>
    </div>
  );
};

export default Home;
