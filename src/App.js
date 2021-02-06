import React, { useState } from 'react';
import AlbumHolder from "./components/AlbubHolder";


import Player1 from "./components/Player1";
import isometric from './assetts/sounds/theLand/1 Isometric.mp3'
import purple from './assetts/sounds/theLand/2 Purple Light.mp3'
import land from './assetts/sounds/theLand/3 The Land.mp3'
import sisters from './assetts/sounds/theLand/4 seven sisters.mp3'
import axes from './assetts/sounds/theLand/5 Axes.mp3'
import castle from './assetts/sounds/theLand/6 The Castle.mp3'
import bright from './assetts/sounds/theLand/7 Bright.mp3'
import friend from './assetts/sounds/theLand/8 Be My Friend.mp3'
import road from './assetts/sounds/theLand/9 ROAD 11.mp3'
import cancione from './assetts/sounds/theLand/10 Triste Cancione.mp3'
import flakes from './assetts/sounds/theLand/11 flakes_1.mp3'

function App() {
    const [initPlaylist, setPlaylist] = useState([isometric,purple,land,
    sisters,axes,castle,bright,friend,road, cancione,flakes])
    const addSong = () =>{
        initPlaylist.push(cancione)
        setPlaylist(initPlaylist)
    }
    console.log(`${initPlaylist}`)

    const audio =new Audio(`${initPlaylist[0]}`)
    const playtrack = () => {
        audio.play()
    }
    const stoptrack = () => {
        audio.pause()
    }
  return (
    <div className="App">

        <div className='container'>
        <h1>My player</h1>
        <Player1/>

        </div>





    </div>
  );
}

export default App;
