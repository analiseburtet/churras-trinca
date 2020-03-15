import React, { useState, useEffect } from "react";
import AddEventButton from "./components/addEventButton"
import firebase from './base.js'
import IconPeople from './assets/icon_people.png'
import IconMoney from './assets/icon_money.png'
import './components/home.css'

function useTimes() {
  const [times, setTimes] = useState([])
  useEffect(()=>{
    const unsubscribe = firebase
      .firestore()
      .collection('eventos')
      .onSnapshot((snapshot) => {
        const newTimes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setTimes(newTimes)
      })
      return () => unsubscribe()
  },[])
  return times
}

const Home = () => {
  const times = useTimes()
  return (
    <div className="w-100 flex justify-center">
      <div className="flex flex-wrap justify-center mg-sm">
        {times.map((i)=>
          <li className="ba b--light-gray w-25 sm pa3 mr2 mb2 mt2 br4 list shadow-4" key={i.id}>
            <p className="b">{i.time_seconds}</p>
            <p className="b">{i.title}</p>
            <div className="flex flex-wrap justify-between">
              <div className="w-50"><img src={IconPeople}/> <p className="ma0 ml2  inline-flex">{i.people}</p></div>
              <div className="w-50 nowrap"><img src={IconMoney}/> <p className="ma0 ml2  inline-flex fz">R$ {i.donation}</p></div>
            </div>
          </li> 
        )}
      <li className="ba b--light-gray w-25 sm pa3 mr2 mb2 mt2 br4 list shadow-4"><AddEventButton/></li>
      </div>
    </div>
  );
};

export default Home;
