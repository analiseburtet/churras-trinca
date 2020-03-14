import React from 'react'
import { Link } from "react-router-dom";
import Churrasqueira from '../assets/churrasqueira.png' 
const AddEventButton = () => {
    return(
        <div className="flex tc justify-center">
        <Link to="/eventos">
        <div className="br-100 bg-light-yellow flex justify-center mb2">
            <img className="ma3" src={Churrasqueira} alt="adicionar novo churras clicando aqui"/>
        </div>
            <button className="ba b--orange br-pill bg-orange b white pa2 tl shadow-4">Novo Churras</button>
        </Link>
        </div>
    )
}

export default AddEventButton