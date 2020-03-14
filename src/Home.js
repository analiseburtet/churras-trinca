import React, { useState, useEffect } from "react";
import AddEventButton from "./components/addEventButton"
import firebase from './base.js'
import IconPeople from './assets/icon_people.png'
import IconMoney from './assets/icon_money.png'

function useTimes() {
  const [times, setTimes] = useState([])
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
          <li className="ba b--light-gray w-25 pa3 mr2 mb2 mt2 br4 list shadow-4" key={i.id}>
            <p className="b">{i.time_seconds}</p>
            <p className="b">{i.title}</p>
            <div className="flex flex-wrap justify-between">
              <div className="w-25"><img src={IconPeople}/> <p>{i.people}</p></div>
              <div className="w-25"><img src={IconMoney}/> <p>{i.donation}</p></div>
            </div>
          </li> 
        )}
      <li className="ba b--light-gray w-25 pa3 mr2 mb2 mt2 br4 list shadow-4"><AddEventButton/></li>
      </div>
    </div>
  );
};

export default Home;
