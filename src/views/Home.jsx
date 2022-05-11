import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Loby from './Loby'

import '../css/home.css'

const Home = () => {

  const [username, setUsername] = useState('Pablo')
  const [login, setlogin] = useState(false)

  return (
    <>
      <Navbar/>
      {
        login ? <Loby username={username}/>
        : <form className="form-container" onSubmit={() => setlogin(true)}>
            <p className='title'>Bienvenido!!!</p>
            <p>Ingresa un nombre: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/></p>
            <button>Comenzar</button>
          </form>
      }        
    </>
  )
}

export default Home