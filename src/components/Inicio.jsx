import React, { useEffect, useState} from 'react'
import { todosPersonajes } from '../functiones/funciones'

const Inicio = () => {
  const [personajes, setPersonages] = useState(null)

  useEffect (()=>{
    todosPersonajes(setPersonages)
  },[])

  return (
    <>
    <h1>The Rick and Morty API</h1>
    <section className="home">
      {personajes != null ? (
        personajes.map(personaje => (
        <div key={personaje.id}>
          <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>
        </div>
      ))
    ) : ('Carregango ...')}
    </section>
    </>
  )
}

export default Inicio
