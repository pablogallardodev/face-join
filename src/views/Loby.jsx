import React, { useEffect, useRef, useState } from 'react'
import Video from 'twilio-video'
import { BsCameraVideoFill, BsCameraVideoOffFill, BsFillPersonFill } from 'react-icons/bs'
import { getToken } from '../api/get-token.js'
import Modal from '../components/Modal'
import Navbar from '../components/Navbar'
import Room from './Room'
import '../css/loby.css'

const Loby = ({ username }) => {

  const localVideoRef = useRef()
  const [roomName, setRoomName] = useState("");

  const [showModal, setShowModal] = useState(false)
  const [preview, setPreview] = useState(true)
  const [connecting, setConnecting] = useState(false);
  const [errorName, setErrorName] = useState(false);
  
  const [track, setTrack] = useState(null)
  const [room, setRoom] = useState(null);

  useEffect(() => {
    if (room === null) {
      Video.createLocalVideoTrack().then( track => {
        localVideoRef.current.appendChild(track.attach())
        setTrack(track)
        setPreview(true)
      })
    }
  },[room])

  const handlePreview = () => {
    track.mediaStreamTrack.enabled = !preview
    setPreview(!preview)
  }

  const connectRoom = async (e) => {
    e.preventDefault();
    if (roomName) {
      setConnecting(true);
      // Obtenemos un token
      const token = await getToken({ identity: username, room: roomName });
      
      if (token) {
        // Creamos la sala y nos conectamos
        Video.connect(token, {
          name: roomName
        }).then((room) => {
          setConnecting(false)
          setShowModal(false)
          setRoom(room)
          
        }).catch((error) => {
          console.error(error)
          setConnecting(false)
          setShowModal(false)
        })
      } else {
        setConnecting(false);
      }

    } else {
      setErrorName(true);
      setInterval(() => {
        setErrorName(false)
      }, 3000);
    }
  }

  const handleLogout = () => {
    room.disconnect()
    setRoom(null);
    setRoomName("")
  }

  return (
    room 
    ? <Room roomName={roomName} room={room} handleLogout={handleLogout} />
    : <>
    <Navbar />
    <div className='loby-container'>
      <div className="local-participant">
        {!preview && <label className='cancel-icon'><BsFillPersonFill/></label>}
        <div ref={localVideoRef} className='local-video'></div>
        {track && 
          <div className='video-actions'>
            {preview ? <button onClick={handlePreview}><BsCameraVideoFill/></button>
            : <button onClick={handlePreview}><BsCameraVideoOffFill/></button>}            
            <label>{username}</label>
          </div>
        }
      </div>
      <div>
        <h1>Hola {username}!! 👋</h1>
        <h2>Que deseas hacer?</h2>
        <button onClick={() => setShowModal(true) }>Crear/unirse a una sala</button>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setRoomName={setRoomName}
        roomName={roomName}
        connecting={connecting}
        handleClick={connectRoom}
        errorName={errorName}
      />
    </div>
    </>
  )
}

export default Loby