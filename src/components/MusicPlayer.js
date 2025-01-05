import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import PlayerControls from "./PlayerControls";
import "./MusicPlayer.css";

const initialTracks = [
  {
    id: "1",
    title: "Billie Jean",
    plays: "1,040,811,084",
    duration: "4:58",
    album: "Thriller 25 Super Deluxe Edition",
    cover: "/mu.png",
    audioSrc: "/beat_it.mp3",
  },
  {
    id: "2",
    title: "Beat It",
    plays: "643,786,045",
    duration: "4:18",
    album: "Thriller 25 Super Deluxe Edition",
    cover: "/mu.png",
    audioSrc: "/beat_it.mp3",
  },
  {
    id: "3",
    title: "Smooth Criminal - 2012 Remaster",
    plays: "407,234,004",
    duration: "4:17",
    album: "Thriller 25 Super Deluxe Edition",
    cover: "/mu.png",
    audioSrc: "/Criminal.mp3",
  },
  {
    id: "4",
    title: "Don't Stop 'Til You Get Enough",
    plays: "316,391,952",
    duration: "6:05",
    album: "Bad 25th Anniversary",
    cover: "/mu.png",
    audioSrc: "/Criminal.mp3",
  },
  {
    id: "5",
    title: "Rock With You - Single Version",
    plays: "268,187,218",
    duration: "3:40",
    album: "Off The Wall",
    cover: "/mu.png",
    audioSrc: "/rock_with_you.mp3",
  },
];

export default function MusicPlayer() {
  const [tracks] = useState(initialTracks);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    const sound = new Howl({
      src: [tracks[currentTrackIndex].audioSrc],
      html5: true,
      onend: () => handleNext(),
    });
    setCurrentSong(sound);

    return () => {
      sound.unload();
    };
  }, [currentTrackIndex]);

  const handlePlayPause = () => {
    if (isPlaying) {
      currentSong.pause();
    } else {
      currentSong.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    const previousIndex =
      (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(previousIndex);
    setIsPlaying(true);
  };

  const handleTrackClick = (index) => {
    if (currentSong) {
      currentSong.stop();
    }
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  const renderTracks = () => {
    return tracks.map((track, index) => {
      const isActive = currentTrackIndex === index;
      return (
        <div
          key={track.id}
          className={`track-row ${isActive ? "active" : ""}`}
          onClick={() => handleTrackClick(index)}
        >
          <div className="track-number">{isActive ? "♪" : index + 1}</div>
          <div className="track-title">
            <img src={track.cover} alt={track.title} />
            <span>{track.title}</span>
          </div>
          <div className="track-plays">{track.plays}</div>
          <div className="track-time">{track.duration}</div>
          <div className="track-album">{track.album}</div>
        </div>
      );
    });
  };

  return (
    <div className="player-layout">
      <div className="music-player">
        <div className="tracks-header">
          <h2>Popular</h2>
          <button className="see-all">See All</button>
        </div>

        <div className="tracks-table">
          <div className="tracks-columns">
            <div className="column-number">#</div>
            <div className="column-title">TITLE</div>
            <div className="column-plays">PLAYS</div>
            <div className="column-time">TIME</div>
            <div className="column-album">ALBUM</div>
          </div>

          <div className="tracks-list">{renderTracks()}</div>
        </div>
      </div>

      <PlayerControls
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrevious={handlePrevious}
        currentTrack={{
          title: tracks[currentTrackIndex].title,
          artist: "Michael Jackson",
          cover: tracks[currentTrackIndex].cover,
          duration: tracks[currentTrackIndex].duration,
        }}
      />
    </div>
  );
}
