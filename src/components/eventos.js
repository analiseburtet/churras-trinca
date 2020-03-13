import React, { useState } from 'react'
import firebase from '../base.js'

const Eventos = () => {
    const [ title,setTitle ] = useState('')
    const [ time, setTime ] = useState('')
    function onSubmit(e){
        e.preventDefault()
        firebase
        .firestore()
        .collection('eventos')
        .add({
            title,
            time_seconds: parseInt(time)
        })
        .then(()=> {
            setTitle('')
            .setTime('')
        })
    }

    return(
        <form onSubmit={onSubmit}>
            <input placeholder="Nome do evento" value={title} onChange={e => setTitle(e.currentTarget.value)}/>
            <input placeholder="17/01" value={time} onChange={e => setTime(e.currentTarget.value)}/>
            <button>Criar Evento</button>
        </form>
    )
}

export default Eventos