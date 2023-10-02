import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {unicoPersonaje} from '../functiones/funciones'
const Personaje = () => {
  const [personaje, setPersonage] = useState()

  const params = useParams()
  useEffect(()=>{
    unicoPersonaje(params.id, setPersonage)
  },[])
    return (
      <>
      {personaje != null ? (
        <section className='personaje'>
            <a href='/' title='Voltar'><svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"></path></svg>Voltar</a>
            <h2>Information:</h2>
            <div><strong>Name:</strong> {personaje.name}</div>
            <div><strong>Specie:</strong> {personaje.species}</div>
            <div className='divStatus'>
              <strong>Situation:</strong> 
              {personaje.status != 'Dead' ? (<span className="statusIcon"></span>) : (<span className="statusIconDead"></span>)}
              {personaje.status}
            </div>
            <div className='origin'><strong>First seen in:</strong> {personaje.origin.name}</div>
            <div className='origin'><strong>Last known location:</strong> {personaje.location.name}</div>
            <img src={personaje.image} alt={personaje.name} />
        </section>
      ) : ('loading ...')}
    
      </>
    )
}

export default Personaje