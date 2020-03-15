import React, { useState } from 'react'
import firebase from '../base.js'
import "./eventos.css"

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
        <form onSubmit={onSubmit} className="flex w-100 justify-center flex-wrap">
        <div className="flex w-max w-100 justify-center flex-wrap ba b--light-gray pa3 mb5 mt3 mr5 ml5 br4 shadow-5">
            <input className="flex w-100 justify-center flex-wrap ba b--light-gray pa3 mb2 mt2 mr2 ml2 br4 shadow-5" placeholder="Nome do evento:" value={title} onChange={e => setTitle(e.currentTarget.value)}/>
            <input className="flex w-100 justify-center flex-wrap ba b--light-gray pa3 mb2 mt2 mr2 ml2 br4 shadow-5" placeholder="17.01" type="number" value={time} onChange={e => setTime(e.currentTarget.value)}/>
            <label className="flex w-100 flex-wrap pa3 mb2 mt2 mr2 ml2 br4 orange b">Quem vai?</label>
            <ul className="flex w-100 justify-center flex-wrap ba b--light-gray pa3 br4 shadow-5 list">
                <li>
                    <input value={donated} onChange={e => setDonated(e.currentTarget.checked)} type="checkbox"/>
                    <input className="flex ba b--light-gray pa3 mb2 mt2 mr2 ml2 br4 shadow-5" placeholder="Ana" value={people} onChange={e => setPeople(e.currentTarget.value)}/>
                    <label className="flex w-100 ba b--light-gray pa3 mb2 mt2 mr2 ml2 br4 shadow-5">Vegetariano/Vegano/LACFREE/GF?</label><input value={vegan} type="checkbox" onChange={e => setVegan(e.currentTarget.checked)}/> 
                    <label className="flex w-100 ba b--light-gray pa3 mb2 mt2 mr2 ml2 br4 shadow-5">Quanto vai contribuir?</label><input className="flex w-100 justify-center flex-wrap ba b--light-gray pa3 mb2 mt2 mr2 ml2 br4 shadow-5" value={donation} onChange={e => setDonation(e.currentTarget.value)} type="number" placeholder="R$ 25,00"/>
                </li>
            </ul>
            <button className="b--orange bg-orange ba b--light-gray w-25 sm pa3 mr2 mb2 mt2 br4 white b shadow-4">Criar evento</button>
        </div>
        </form>
    )
}

export default Eventos