import React, { useState, useEffect } from "react";
import AddEventButton from "./addEventButton"
import firebase from '../base.js'
import Modal from '../components/Modal'
import IconPeople from '../images/icon_people.png'
import IconMoney from '../images/icon_money.png'

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
  const [on, setOn] = useState(false);
  const modalOpen = () => setOn(true);

  return (
    <div className="w-100 flex justify-center">
      <div className="flex flex-wrap justify-center mg-sm">
      <Modal />
        {times.map((i)=>
            <li className="link ba  black b--light-gray w-25 sm pa3 mr2 mb2 mt2 br4 list shadow-4" onClick={modalOpen}>
              <p className="b">{i.time_seconds}</p>
              <p className="b">{i.title}</p>
              <div className="flex flex-wrap justify-between">
                <div className="w-50"><img  alt="Número de pessoas convidadas:" src={IconPeople}/> <p className="ma0 ml2  inline-flex">{i.people}</p></div>
                <div className="w-50 nowrap"><img src={IconMoney} alt="total de dinheiro arrecadado:"/> <p className="ma0 ml2  inline-flex fz">R$ {i.donation}</p></div>
              </div>
            </li> 
        )}
      <li className="ba b--light-gray w-25 sm pa3 mr2 mb2 mt2 br4 list shadow-4"><AddEventButton/></li>
      </div>
    </div>
  );
};

export default Home;
