import React, { useState } from 'react'
import firebase from '../base.js'

const Eventos = () => {
    const [ title,setTitle ] = useState('')
    const [ time, setTime ] = useState('')
    const [ vegan, setVegan ] = useState('')
    const [ people, setPeople ] = useState([])
    const [ donation, setDonation ] = useState('')
    const [ donated, setDonated ] =  useState('')

    function onSubmit(e){
        e.preventDefault()
        firebase
            .firestore()
            .collection('eventos')
            .add({
                title,
                time_seconds: parseFloat(time),
                vegan,
                people: people.split(" ",),
                donation: parseFloat(donation),
                donated
            })
            .then(()=> {
                setTitle('')
                setTime('')
                setVegan('')
                setPeople([])
                setDonation('')
                setDonated('')
            })
    }

    return(
        <form onSubmit={onSubmit}>
            <input placeholder="Nome do evento" value={title} onChange={e => setTitle(e.currentTarget.value)}/>
            <input placeholder="17/01" type="number" value={time} onChange={e => setTime(e.currentTarget.value)}/>
            <label>Quem vai?</label>
            <ul>
                <li>
                    <label>Vegetariano/Vegano/LACFREE/GF</label><input value={vegan} type="checkbox" onChange={e => setVegan(e.currentTarget.checked)}/> 
                    <label>Nome:</label><input placeholder="Convidado" value={people} onChange={e => setPeople(e.currentTarget.value)}/>
                    <label>Quanto vai contribuir?</label><input value={donation} onChange={e => setDonation(e.currentTarget.value)} type="number"/>
                    <label>Já pagou?</label><input value={donated} onChange={e => setDonated(e.currentTarget.checked)} type="checkbox"/>
                </li>
            </ul>
            <button>Criar Evento</button>
        </form>
    )
}

export default Eventos