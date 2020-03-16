import React from 'react'
import Trinca from '../images/trinca.png'
import app from "../base"
const Footer = () => {
    return(
        <footer className="">
            <button className="ba b--orange br-pill fixed bottom-2 absolute bg-transparent b orange pa2 tl shadow-4 right-1" onClick={() => app.auth().signOut()}>Sair</button>
        <div className="bg-yellow tc fl w-100">
            <img className="pv4" src={Trinca} alt="trinca"/>
        </div>
        </footer>
    )
}

export default Footer
