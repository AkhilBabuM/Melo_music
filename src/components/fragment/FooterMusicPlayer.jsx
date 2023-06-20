import React, { useEffect, useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import "./FooterMusicPlayer.css";

function FooterMusicPlayer({ music }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  console.log(music);

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.addEventListener("canplaythrough", () => {
      setDuration(audioElement.duration);
    });
    const updateTime = () => {
      setCurrentTime(audioElement.currentTime);
    };
    audioElement.addEventListener("timeupdate", updateTime);
    return () => {
      audioElement.removeEventListener("canplaythrough", updateTime);
      audioElement.removeEventListener("timeupdate", updateTime);
      audioElement.pause();
    };
  }, []);

  const togglePlay = () => {
    const audioElement = audioRef.current;
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
    setPlaying(!audioElement.paused);
  };

  const handleVolumeChange = (e) => {
    const audioElement = audioRef.current;
    const volume = parseFloat(e.target.value);
    audioElement.volume = volume;
    setVolume(volume);
  };

  function formatTime(time) {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  return (
    <>
      <div className="music-progress-bar">
        <input
          className='musicprogressbarstyle'
          style={{width:'100%'}}
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          step="0.1"
          onChange={(e) => {
            const audioElement = audioRef.current;
            audioElement.currentTime = parseFloat(e.target.value);
            setCurrentTime(audioElement.currentTime);
          }}
        />
      </div>
      <div className="footer-music-player">
        <div className="music-details">
          <div className="music-info">
            <h4 className="music-title">{music.title}</h4>
            <p className="music-artist">{music.artist}</p>
          </div>
          <div className="music-controls">
            <Button
              variant="contained"
              color="primary"
              className="play-button"
              onClick={togglePlay}
            >
              {playing ? (
                <PauseCircleFilledIcon className="play-icon" />
              ) : (
                <PlayCircleFilledIcon className="play-icon" />
              )}
            </Button>
          </div>
        </div>
        
        <div className="playback-widgets">
          <div className="timer">
            <p>
              <span>{formatTime(currentTime)}</span> /{" "}
              <span>{formatTime(duration)}</span>
            </p>
          </div>
          <div >
            <input
              className="volume-control"
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
        <audio ref={audioRef} src={music.musicUri} />
      </div>
    </>
  );
}

export default FooterMusicPlayer;
