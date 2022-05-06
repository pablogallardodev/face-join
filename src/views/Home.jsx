import React, { useState } from 'react'
import Loby from './Loby'
import Nav from '../components/Nav'

import '../css/home.css'

const Home = () => {

  const [login, setLogin] = useState(false)
  const [username, setUserName] = useState("Pablo")

  const handleSubmit = (e) => {
    e.preventDefault()
    setLogin(true)
  }

  return (
    <div>
      <Nav />
      {
        login
        ? <Loby username={username}/>
        : <form onSubmit={handleSubmit} className="form-container">
            <p className='title'>Bienvenido!!!</p>
            <p>Ingresa un nombre: <input type="text" value={username} onChange={ e => setUserName(e.target.value)}/></p>
            <button>Comenzar</button>
          </form>
      }
    </div>
  )
}

export default Home