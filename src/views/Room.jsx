import React, { useEffect, useState } from "react";
import { BsCameraVideoFill, BsCameraVideoOffFill, BsMicFill, BsMicMuteFill } from 'react-icons/bs'
import { FcOk } from "react-icons/fc";
import Participant from "../components/Participant";

import '../css/room.css'

const Room = ({ roomName, room, handleLogout }) => {
  const [participants, setParticipants] = useState([]);
  const [outName, setOutName] = useState("");
  const [isMuted, setIsMuted] = useState(true);
  const [isView, setIsView] = useState(true);

  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );

      setOutName(`${participant.identity} ha abandonado la sala.`);
      setTimeout(() => {
        setOutName("");        
      }, 5000);
    };

    room.on("participantConnected", participantConnected);
    room.on("participantDisconnected", participantDisconnected);
    room.participants.forEach(participantConnected);

    return () => {
      room.off("participantConnected", participantConnected);
      room.off("participantDisconnected", participantDisconnected);
    };
  }, [room]);

  useEffect(() => {

    isMuted && room.localParticipant.audioTracks.forEach(publication => {
      publication.track.disable();
    });

    !isMuted && room.localParticipant.audioTracks.forEach(publication => {
      publication.track.enable();
    });

    !isView && room.localParticipant.videoTracks.forEach(publication => {
      publication.track.disable();
    });

    isView && room.localParticipant.videoTracks.forEach(publication => {
      publication.track.enable();
    });

  }, [isMuted, isView]);

  return (
    <div className="room">
      <div className="room-data">
        <h2>Sala: {roomName}</h2>
        <button onClick={handleLogout}>Salir de la sesión</button>
      </div>
      {outName && <div className="out-participant">
        <FcOk/><label>{outName}</label>
      </div>}
      <div className="participants">
        {room ? (
          <>
          <Participant
            key={room.localParticipant.sid}
            participant={room.localParticipant}
          />
          {participants.map((participant) => (
              <Participant key={participant.sid} participant={participant} isView={isView}/>
          ))}
          </>
        ) : (
          ""
        )}
      </div>
      <div className="actions">
        <label
          onClick={() => setIsMuted(!isMuted)}
          style={isMuted ? { borderBottom: '3px solid red' } : { borderBottom: '3px solid green' }}
        >
          {isMuted ? <BsMicMuteFill /> : <BsMicFill />}
        </label>
        <label
          onClick={() => setIsView(!isView)}
          style={isView ? { borderBottom: '3px solid green' } : { borderBottom: '3px solid red' }}
        >
          {isView ? <BsCameraVideoFill /> : <BsCameraVideoOffFill />}
        </label>
      </div>
    </div>
  );
};

export default Room;
