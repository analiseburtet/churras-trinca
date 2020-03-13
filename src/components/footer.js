import React from 'react'
import Trinca from '../assets/trinca.png'
import app from "../base"
const Footer = () => {
    return(
        <div>
            <button className="ba b--orange br-pill bg-transparent b orange pa2 tl shadow-4 fixed right-1" onClick={() => app.auth().signOut()}>Sair</button>
        <div className="bg-yellow tc absolute bottom-0 fl w-100">
            <img className="pv4" src={Trinca} alt="trinca"/>
        </div>
        </div>
    )
}

export default Footer