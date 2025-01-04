import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import PlayerControls from "./PlayerControls";
import "./MusicPlayer.css";

const initialTracks = [
  {
    id: "1",
    title: "Billie Jean",
    plays: "1,040,811,084",
    duration: "4:53",
    album: "Thriller 25 Super Deluxe Edition",
    cover: "/Michael.png",
  },
  {
    id: "2",
    title: "Beat It",
    plays: "643,786,045",
    duration: "4:18",
    album: "Thriller 25 Super Deluxe Edition",
    cover: "/Michael.png",
  },
  {
    id: "3",
    title: "Smooth Criminal - 2012 Remaster",
    plays: "407,234,004",
    duration: "4:17",
    album: "Thriller 25 Super Deluxe Edition",
    cover: "/Michael.png",
  },
  {
    id: "4",
    title: "Don't Stop 'Til You Get Enough",
    plays: "316,391,952",
    duration: "6:05",
    album: "Bad 25th Anniversary",
    cover: "/Michael.png",
  },
  {
    id: "5",
    title: "Rock With You - Single Version",
    plays: "268,187,218",
    duration: "3:40",
    album: "Off The Wall",
    cover: "/Michael.png",
  },
];

export default function MusicPlayer() {
  const [tracks, setTracks] = useState(initialTracks);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(tracks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTracks(items);
  };

  const playTrack = (index) => {
    setCurrentTrack(index);
    setIsPlaying(true);
  };

  return (
    <div className="music-player">
      <div className="tracks-section">
        <div className="tracks-header">
          <h2>Popular</h2>
          <span className="see-all">See All</span>
        </div>

        <div className="tracks-table-header">
          <span className="column-number">#</span>
          <span className="column-title">TITLE</span>
          <span className="column-plays">PLAYING</span>
          <span className="column-duration">TIME</span>
          <span className="column-album">ALBUM</span>
        </div>

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="tracks">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="tracks-list"
              >
                {tracks.map((track, index) => (
                  <Draggable
                    key={track.id}
                    draggableId={track.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`track-item ${
                          currentTrack === index ? "active" : ""
                        }`}
                        onClick={() => playTrack(index)}
                      >
                        <span className="track-number">{index + 1}</span>
                        <div className="track-title">
                          <img src={track.cover} alt={track.title} />
                          <span>{track.title}</span>
                        </div>
                        <span className="track-plays">{track.plays}</span>
                        <span className="track-duration">{track.duration}</span>
                        <span className="track-album">{track.album}</span>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      <PlayerControls
        isPlaying={isPlaying}
        onPlayPause={() => setIsPlaying(!isPlaying)}
        onNext={() =>
          currentTrack !== null &&
          currentTrack < tracks.length - 1 &&
          playTrack(currentTrack + 1)
        }
        onPrevious={() =>
          currentTrack !== null &&
          currentTrack > 0 &&
          playTrack(currentTrack - 1)
        }
        currentTrack={currentTrack !== null ? tracks[currentTrack] : null}
      />
    </div>
  );
}
