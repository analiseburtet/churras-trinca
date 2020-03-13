import React from 'react'
import { Link } from "react-router-dom";
import Churrasqueira from '../assets/churrasqueira.png' 
const AddEventButton = () => {
    return(
        <div className="flex tc justify-center">
        <Link to="/eventos">
            <img className="mb2" src={Churrasqueira} alt="adicionar novo churras clicando aqui"/>
            <button className="ba b--orange br-pill bg-orange b white pa2 tl shadow-4">Novo Churras</button>
        </Link>
        </div>
    )
}

export default AddEventButton