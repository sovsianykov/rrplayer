import React, { useState } from 'react';
import AlbumHolder from "./components/AlbubHolder";
import Player1 from "./components/Player1";




function App() {

    // const addSong = () =>{
    //     initPlaylist.push(cancione)
    //     setPlaylist(initPlaylist)
    // }
    // console.log(`${initPlaylist}`)
    //
    // const audio =new Audio(`${initPlaylist[0]}`)
    // const playtrack = () => {
    //     audio.play()
    // }
    // const stoptrack = () => {
    //     audio.pause()
    // }
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
