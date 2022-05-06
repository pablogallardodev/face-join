import React, { useRef } from 'react'
import Video from 'twilio-video'
import { connect } from '../functions/actions'

import '../css/loby.css'

const Loby = ({ username }) => {

  const localVideoRef = useRef();

  const handleCreateRoom = () => {
    connect(username)
  }

  async function addLocalVideo () {
    const track = await Video.createLocalVideoTrack()
    localVideoRef.current.appendChild(track.attach())
  }
  
  addLocalVideo()

  return (
    <div className='loby-container'>
      <div ref={localVideoRef} className="participant"></div>
      <div>
        <h1>Hola {username}!! 👋</h1>
        <h2>Que deseas hacer?</h2>
        <div className='btn-container'>
          <button onClick={handleCreateRoom} >Crear una sala</button>
          <button>Unirse a una sala</button>
        </div>
      </div>
    </div>
  )
}

export default Loby