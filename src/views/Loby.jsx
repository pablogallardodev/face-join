import React, { useEffect, useRef, useState } from 'react'
import Video from 'twilio-video'
import { connect } from '../functions/actions'
import Modal from '../components/Modal'
import '../css/loby.css'

const Loby = ({ username }) => {

  const localVideoRef = useRef()
  const [roomName, setRoomName] = useState("");

  const [showModal, setShowModal] = useState(false)
  const [preview, setPreview] = useState(true)
  const [connecting, setConnecting] = useState(false);
  const [created, setCreated] = useState(true);
  const [errorName, setErrorName] = useState(false);
  
  const [track, setTrack] = useState(null)
  const [room, setRoom] = useState(null);

  useEffect(() => {
    Video.createLocalVideoTrack().then( track => {
      localVideoRef.current.appendChild(track.attach())
      setTrack(track)
    })
  },[])

  const handlePreview = () => {
    track.mediaStreamTrack.enabled = !preview
    setPreview(!preview)
  }

  const createRoom = () => {
    if (roomName) {
      
    } else {
      setErrorName(true);
      setInterval(() => {
        setErrorName(false)
      }, 3000);
    }
  }

  const connectRoom = () => {
    setConnecting(true)
    console.log("Conectando");
  }

  return (
    <div className='loby-container'>
      <div className="participant">
        {!preview && <label className='cancel-icon'>🚫</label>}
        <div ref={localVideoRef} className='local-video'></div>
        {track && 
          <div className='video-actions'>
            <button onClick={handlePreview}>{preview ? 'Ocultar 📷' : 'Mostrar 📷'}</button>
            <label>{username}</label>
          </div>
        }
      </div>
      <div>
        <h1>Hola {username}!! 👋</h1>
        <h2>Que deseas hacer?</h2>
        <div className='btn-container'>
            <button onClick={() => {setShowModal(true); setCreated(true)} }>Crear una sala</button>
            <button onClick={() => {setShowModal(true); setCreated(false)} }>Unirse a una sala</button>
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setRoomName={setRoomName}
        roomName={roomName}
        connecting={connecting}
        handleClick={created ? createRoom : connectRoom}
        errorName={errorName}
      />
    </div>
  )
}

export default Loby