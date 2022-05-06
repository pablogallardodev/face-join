import React, { useEffect } from 'react'
import { connect, createLocalTracks } from 'twilio-video'

const Home = async () => {

  createLocalTracks({
    audio: true,
    video: { width: 640 }
  }).then(localTracks => {
    console.log(localTracks)
  }).then(room => {
    console.log(`Connected to Room: ${room.name}`);
  });

  return (
    <div id="container">
      Home
    </div>
  )
}

export default Home