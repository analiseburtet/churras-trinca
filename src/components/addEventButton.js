import React from 'react'
import { Link } from "react-router-dom";
import Churrasqueira from '../assets/churrasqueira.png' 
const AddEventButton = () => {
    return(
        <div>
        <Link to="/eventos">
            <img src={Churrasqueira}/>
            Adicionar Churras
        </Link>
        </div>
    )
}

export default AddEventButton