import React, { useState } from 'react'
import firebase from '../base.js'

const Eventos = () => {
    const [ title,setTitle ] = useState('')
    function onSubmit(e){
        e.preventDefault()
        firebase
        .firestore()
        .collection('eventos')
        .add({
            title
        })
        .then(()=> {
            setTitle('')
        })
    }

    return(
        <form onSubmit={onSubmit}>
        <input placeholder="Nome do evento" value={title} onChange={e => setTitle(e.currentTarget.value)}/>
        <button>Criar Evento</button>
        </form>
    )
}

export default Eventos