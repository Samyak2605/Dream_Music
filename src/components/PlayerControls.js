import React from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import "./PlayerControls.css";

function PlayerControls(props) {
  const { isPlaying, onPlayPause, onPrevious, onNext, currentSong } = props;

  return React.createElement(
    "div",
    { className: "player-controls" },
    currentSong &&
      React.createElement(
        "div",
        { className: "song-info" },
        React.createElement("img", {
          src: currentSong.cover,
          alt: currentSong.title,
          className: "song-cover",
        }),
        React.createElement(
          "div",
          { className: "song-details" },
          React.createElement("h3", null, currentSong.title),
          React.createElement("p", null, currentSong.artist)
        )
      ),
    React.createElement(
      "div",
      { className: "controls" },
      React.createElement(
        "button",
        { onClick: onPrevious, className: "control-button" },
        React.createElement(SkipBack, { size: 24 })
      ),
      React.createElement(
        "button",
        { onClick: onPlayPause, className: "control-button play-pause" },
        isPlaying
          ? React.createElement(Pause, { size: 32 })
          : React.createElement(Play, { size: 32 })
      ),
      React.createElement(
        "button",
        { onClick: onNext, className: "control-button" },
        React.createElement(SkipForward, { size: 24 })
      )
    )
  );
}

export default PlayerControls;
