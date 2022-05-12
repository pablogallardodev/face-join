import React, { useState, useEffect, useRef } from "react";
import { BsCameraVideoOffFill, BsMicMuteFill } from 'react-icons/bs'

import '../css/participant.css'

const Participant = ({ participant }) => {
  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);
  const [isMuted, setIsMuted] = useState(false);
  const [isView, setIsView] = useState(true);

  const videoRef = useRef();
  const audioRef = useRef();

  const trackpubsToTracks = (trackMap) =>
    Array.from(trackMap.values())
      .map((publication) => publication.track)
      .filter((track) => track !== null);

  useEffect(() => {
    setVideoTracks(trackpubsToTracks(participant.videoTracks));
    setAudioTracks(trackpubsToTracks(participant.audioTracks));

    const trackSubscribed = (track) => {
      if (track.kind === "video") {
        setVideoTracks((videoTracks) => [...videoTracks, track]);
      } else if (track.kind === "audio") {
        setAudioTracks((audioTracks) => [...audioTracks, track]);
      }
    };

    const trackUnsubscribed = (track) => {
      if (track.kind === "video") {
        setVideoTracks((videoTracks) => videoTracks.filter((v) => v !== track));
      } else if (track.kind === "audio") {
        setAudioTracks((audioTracks) => audioTracks.filter((a) => a !== track));
      }
    };

    const handleTrackDisabled = (track) => {
      track.on('disabled', () => {
        if (track.kind === "video") {
          track.mediaStreamTrack.enabled = false;
          setIsView(false)
        } else if (track.kind === "audio") {
          setIsMuted(true);
        }
      });
      
      track.on('enabled', () => {
        if (track.kind === "video") {
          track.mediaStreamTrack.enabled = true;
          setIsView(true);
        } else if (track.kind === "audio") {
          setIsMuted(false);
        }
      });
    }

    participant.on("trackSubscribed", trackSubscribed);
    participant.on("trackUnsubscribed", trackUnsubscribed);

    participant.tracks.forEach(publication => {
      if (publication.isSubscribed) {
        handleTrackDisabled(publication.track);
      }
      publication.on('subscribed', handleTrackDisabled);
    });

    return () => {
      setVideoTracks([]);
      setAudioTracks([]);
      participant.removeAllListeners();
    };
  }, [participant]);

  useEffect(() => {
    const videoTrack = videoTracks[0];
    if (videoTrack) {
      videoTrack.attach(videoRef.current);
      return () => {
        videoTrack.detach();
      };
    }
  }, [videoTracks]);

  useEffect(() => {
    const audioTrack = audioTracks[0];
    if (audioTrack) {
      audioTrack.attach(audioRef.current);
      return () => {
        audioTrack.detach();
      };
    }
  }, [audioTracks]);

  return (
    <div className="participant">
      <h3>{participant.identity}</h3>
      <video ref={videoRef} autoPlay={true} />
      <audio ref={audioRef} autoPlay={true} />
      <div className="actions">
        {isMuted ? <BsMicMuteFill /> : null}
        {!isView ? <BsCameraVideoOffFill /> : null}
      </div>
    </div>
  );
};

export default Participant;
