import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Home = () => {

  const [username, setUsername] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      
    } else {
      alert('Please enter a username')
    }
  }

  return (
      <div>
        <Navbar/>
        <form className="form-container" onSubmit={handleSubmit}>
            <p className='title'>Bienvenido!!!</p>
            <p>Ingresa un nombre: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/></p>
            <button>Comenzar</button>
        </form>
    </div>
  )
}

export default Home