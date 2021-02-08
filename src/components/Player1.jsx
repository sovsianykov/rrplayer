import React, { useState } from "react";
import MyButton from "./Button";

import AlbumHolder from "./AlbubHolder";
import PlaylistHolder from "./PlaylistHolder";

import isometric from "../assetts/sounds/theLand/1 Isometric.mp3";
import purple from "../assetts/sounds/theLand/2 Purple Light.mp3";
import land from "../assetts/sounds/theLand/3 The Land.mp3";
import sisters from "../assetts/sounds/theLand/4 seven sisters.mp3";
import axes from "../assetts/sounds/theLand/5 Axes.mp3";
import castle from "../assetts/sounds/theLand/6 The Castle.mp3";
import bright from "../assetts/sounds/theLand/7 Bright.mp3";
import friend from "../assetts/sounds/theLand/8 Be My Friend.mp3";
import road from "../assetts/sounds/theLand/9 ROAD 11.mp3";
import cancione from "../assetts/sounds/theLand/10 Triste Cancione.mp3";
import flakes from "../assetts/sounds/theLand/11 flakes_1.mp3";
import { generateUniqueID } from "web-vitals/dist/modules/lib/generateUniqueID";

const theLand = [
  { id: 1, src: isometric, name: "isometric", album: "The Land" },
  { id: 2, src: purple, name: "purple", album: "The Land" },
  { id: 3, src: land, name: "land", album: "The Land" },
  { id: 4, src: sisters, name: "sisters", album: "The Land" },
  { id: 5, src: axes, name: "axes", album: "The Land" },
  { id: 6, src: castle, name: "castle", album: "The Land" },
  { id: 7, src: bright, name: "bright", album: "The Land" },
  { id: 8, src: friend, name: "friend", album: "The Land" },
  { id: 9, src: road, name: "road", album: "The Land" },
  { id: 10, src: cancione, name: "cancione", album: "The Land" },
  { id: 11, src: flakes, name: "flakes", album: "The Land" },
];

const currentAlbum = theLand;

function Player1() {
  const [initPlaylist, setPlaylist] = useState([]);

  // const [playTracks, setPlayTracks] = useState([])

  const playTrack = (e) => {
    let newElement = [
      currentAlbum.find((obj) => obj.name === e.target.innerText),
    ];
    setPlaylist(initPlaylist.concat(newElement));
  };
  let audio = new Audio();

  const getPlpay = () => {
    let playlist = [];
    let i = 0;
    initPlaylist.map((song, n) => {
      return (playlist[n] = song.src);
    });
    audio.addEventListener(
      "ended",
      function () {
        i = ++i < playlist.length ? i : 0;
        console.log(i);
        audio.src = playlist[i];
        audio.play();
      },
      true
    );
    audio.volume = 1;
    audio.loop = false;
    audio.src = playlist[0];
    audio.play();
  };
  const Pause = () => {
    audio.pause();
  };
  const Clear = () => {
    setPlaylist([]);
  };

  return (
    <>
      <div className="pl row">
        <div className="col-sm-4">
          <h4>album "{currentAlbum[0].album}"</h4>
          <AlbumHolder
            class="table "
            onClick={playTrack}
            Playlist={currentAlbum}
            key={generateUniqueID}
          />
        </div>
        <div className="main col-sm-4">
          <div className="imgHolder">
            <img
              src="https://m.media-amazon.com/images/I/71X9fvhnrML._SS500_.jpg"
              alt="img"
            />
          </div>
          <MyButton onClick={getPlpay} id="play">
            play List
          </MyButton>
          <MyButton onClick={Pause} id="pause">
            pause
          </MyButton>
          <MyButton id="clear" onClick={Clear}>
            clear
          </MyButton>
          <MyButton id="quit">load album</MyButton>
        </div>
        <div className="col-sm-4">
          <h4>PLAYLIST </h4>
          <PlaylistHolder id="plist" Playlist={initPlaylist} />
        </div>
      </div>
    </>
  );
}
export default Player1;
