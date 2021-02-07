import React, {useState} from "react";
import MyButton from "./Button";


import AlbumHolder from "./AlbubHolder";
import isometric from '../assetts/sounds/theLand/1 Isometric.mp3'
import purple from '../assetts/sounds/theLand/2 Purple Light.mp3'
import land from '../assetts/sounds/theLand/3 The Land.mp3'
import sisters from '../assetts/sounds/theLand/4 seven sisters.mp3'
import axes from '../assetts/sounds/theLand/5 Axes.mp3'
import castle from '../assetts/sounds/theLand/6 The Castle.mp3'
import bright from '../assetts/sounds/theLand/7 Bright.mp3'
import friend from '../assetts/sounds/theLand/8 Be My Friend.mp3'
import road from '../assetts/sounds/theLand/9 ROAD 11.mp3'
import cancione from '../assetts/sounds/theLand/10 Triste Cancione.mp3'
import flakes from '../assetts/sounds/theLand/11 flakes_1.mp3'

 const theLand = [
     { id : 1 , src : isometric , name : 'isometric' , active: false },
     { id : 2 , src : purple , name : 'purple',active: false },
     { id : 3 , src : land , name : 'land',active: false },
     { id : 4 , src : sisters , name : 'sisters',active: false },
     { id : 5 , src : axes , name : 'axes' , active: false},
     { id : 6 , src : castle , name : 'castle', active: false },
     { id : 7 , src : bright , name : 'bright' , active: false},
     { id : 8 , src : friend , name : 'friend', active: false },
     { id : 9 , src : road , name : 'road' , active: false},
     { id : 10 , src : cancione , name : 'cancione',active: false },
     { id : 11 , src : flakes , name : 'flakes' ,active: false}
 ]


function Player1() {
    const [initPlaylist, setPlaylist] = useState([])

    // const [playTracks, setPlayTracks] = useState([])





    const playTrack= (e) => {
      let newElement = [theLand.find((obj) => obj.name === e.target.innerText )]
        newElement.active = true
   setPlaylist(initPlaylist.concat(newElement))


        console.log(newElement)
        console.log(newElement.active)
        console.log(initPlaylist)

    }


    return (
        <>

                <div className="pl">
                    <div className="imgHolder">
                        <img src="https://m.media-amazon.com/images/I/71X9fvhnrML._SS500_.jpg" alt="img"/>
                    </div>
                    <MyButton id='play'>play</MyButton>
                    <MyButton  id='pause'>pause</MyButton>
                    <MyButton id='add'>load album</MyButton>
                    <MyButton id='quit'>quit</MyButton>
                    <AlbumHolder id = 'table'  onClick = {playTrack} Playlist = {theLand} />
                    <AlbumHolder   Playlist = {initPlaylist} />

                </div>

        </>

    )

}
export default Player1;
