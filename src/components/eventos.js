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
            <ul className="flex w-100 justify-center justify-left flex-wrap ba b--light-gray pa3 br4 shadow-5 list">
                <li>
                    <div className="w-50 ba b--light-gray pa3 mb2 mt2 mr2 ml2 br4 shadow-5">
                        <label className="relative flex items-center">
                        Já pagou?
                        <input className="absolute z-5 w-100 h-100 o-0 input-reset pointer checkbox" value={donated} onChange={e => setDonated(e.currentTarget.checked)} type="checkbox"/>
                        <span className="relative z-4 dib w1 h1 bg-mid-gray overflow-hidden br1 v-mid bg-animate bg-center checkbox-wrapper dib ml2 helvetica silver lh-solid"></span>
                        </label>
                    </div>
                    <div className="w-70 ba b--light-gray pa3 mb2 mt2 mr2 ml2 br4 shadow-5">
                        <label className="">Quanto vai contribuir?</label>
                        <input className="flex w-100 justify-center flex-wrap ba b--light-gray pa3 mb2 mt2   br4 shadow-5" value={donation} onChange={e => setDonation(e.currentTarget.value)} type="number" placeholder="R$ 25,00"/> 
                    </div>
                    <input className="flex ba b--light-gray pa3 mb2 mt2 mr2 ml2 br4 shadow-5" placeholder="Quem?" value={people} onChange={e => setPeople(e.currentTarget.value)}/>
                    <div className="w-100 ba b--light-gray pa3 mb2 mt2 mr2 ml2 br4 shadow-5">
                        <label className="relative flex items-center">
                        Vegetariano/Vegano/LACFREE/GF?
                        <input className="absolute z-5 w-100 h-100 o-0 input-reset pointer checkbox" value={vegan} type="checkbox" onChange={e => setVegan(e.currentTarget.checked)}/>
                        <span className="relative z-4 dib w1 h1 bg-mid-gray overflow-hidden br1 v-mid bg-animate bg-center checkbox-wrapper dib ml2 helvetica silver lh-solid"></span>
                        </label>
                    </div>
                </li>
            </ul>
            <button className="b--orange bg-orange ba b--light-gray w-25 sm pa3 mr2 mb2 mt2 br4 white b shadow-4">Criar evento</button>
        </div>
        </form>
    )
}

export default Eventos