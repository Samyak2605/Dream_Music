import React, { useState, useEffect } from "react";
import {
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
} from "lucide-react";
import "./PlayerControls.css";

function PlayerControls({
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
  currentTrack,
}) {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isPlaying && currentTime < parseDuration(currentTrack.duration)) {
      intervalId = setInterval(() => {
        setCurrentTime((prevTime) => {
          const newTime = prevTime + 1;
          if (newTime >= parseDuration(currentTrack.duration)) {
            clearInterval(intervalId);
            onPlayPause();
            return parseDuration(currentTrack.duration);
          }
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, currentTrack, onPlayPause]);

  useEffect(() => {
    setProgress((currentTime / parseDuration(currentTrack.duration)) * 100);
  }, [currentTime, currentTrack.duration]);

  useEffect(() => {
    setCurrentTime(0);
  }, [currentTrack]);

  function parseDuration(duration) {
    const [minutes, seconds] = duration.split(":").map(Number);
    return minutes * 60 + seconds;
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  }

  return (
    <div className="player-card">
      <div className="player-header">Now Playing</div>
      {currentTrack && (
        <>
          <div className="player-image-container">
            <img
              src={currentTrack.cover}
              alt={currentTrack.title}
              className="player-image"
            />
          </div>

          <div className="player-info">
            <h3>{currentTrack.title}</h3>
            <p>{currentTrack.artist}</p>
          </div>

          <div className="player-progress">
            <span className="time-current">{formatTime(currentTime)}</span>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="time-total">{currentTrack.duration}</span>
          </div>

          <div className="player-controls">
            <button className="control-button">
              <Shuffle size={20} />
            </button>
            <button className="control-button" onClick={onPrevious}>
              <SkipBack size={20} />
            </button>
            <button
              className="control-button play-button"
              onClick={onPlayPause}
            >
              {isPlaying ? (
                <Pause size={24} className="play-icon" />
              ) : (
                <Play size={24} className="play-icon" />
              )}
            </button>
            <button className="control-button" onClick={onNext}>
              <SkipForward size={20} />
            </button>
            <button className="control-button">
              <Repeat size={20} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default PlayerControls;
