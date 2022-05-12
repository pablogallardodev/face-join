import React, { useState } from 'react'
import { BsGithub, BsInstagram, BsYoutube } from 'react-icons/bs'
import Navbar from '../components/Navbar'
import Loby from './Loby'

import '../css/home.css'

const Home = () => {

  const [username, setUsername] = useState('Pablo')
  const [login, setlogin] = useState(false)

  return (
    <>
      {
        login ? <Loby username={username}/>
        : <>
            <Navbar />
            <form className="form-container" onSubmit={() => setlogin(true)}>
              <p className='title'>Bienvenido!!!</p>
              <p>Ingresa un nombre: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/></p>
              <button>Comenzar</button>

              <div className='social'>
                <a href="https://github.com/pablogallardodev/face-join" target="_blank"><BsGithub /></a>
                <a href="https://www.instagram.com/pablogallardodev/" target="_blank"><BsInstagram /></a>
                <a href="https://www.youtube.com/channel/UCS-YoU7f8PztGHBd4OD9RSw" target="_blank"><BsYoutube /></a>
              </div>
            </form>
          </>
      }        
    </>
  )
}

export default Home