export async function connect (username) {
  const response = await fetch('/video/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username})
  })

  const data = await response.json()
  console.log(data);
//   room = await Twilio.Video.connect(data.token)
//   room.participants.forEach(participantConnected)
//   room.on('participantConnected', participantConnected)
//   room.on('participantDisconnected', participantDisconnected)
//   connected = true
//   updateParticipantCount()
}

// function disconnect () {
//   room.disconnect()
//   // quitar la cámara de los divs
//   connected = false
//   updateParticipantCount()
// }

// function updateParticipantCount () {
//   $count.innerHTML = `${room.participants.size + 1} online users`
// }

// function participantConnected (participant) {
//   const template = `<div id='participant-${participant.id}' class="participant">
//     <div class="video"></div>
//     <div>${participant.identity}</div>
//   </div>`

//   $container.insertAdjacentHTML('beforeend', template)

//   participant.tracks.forEach(localTrackPublication => {
//     const {isSubscribed, track} = localTrackPublication
//     if (isSubscribed) attachTrack(track)
//   })

//   participant.on('trackSubscribed', attachTrack)
//   participant.on('trackUnsubscribed', track => track.detach())
//   updateParticipantCount()
// }

// function attachTrack (track) {
//   const $video = $container.querySelector(`.participant:last-child .video`)
//   $video.appendChild(track.attach())
// }

// function participantDisconnected (participant) {
//   console.log('participant disconnected')
// }