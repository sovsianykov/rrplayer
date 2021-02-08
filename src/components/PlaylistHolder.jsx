import React from "react";

function PlaylistHolder({ Playlist }) {
  return (
    <>
      <div className="playlist">
        {Playlist.map((song, i) => {
          return (
            <div>
              <span key={`${i}`}>{song.name}</span>
              <audio controls key={`${song}_${i}`}>
                <source src={song.src} className="list" />
              </audio>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default PlaylistHolder;
