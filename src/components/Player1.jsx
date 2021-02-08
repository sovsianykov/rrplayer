import React, {useState} from "react";
import MyButton from "./Button";


import AlbumHolder from "./AlbubHolder";
import PlaylistHolder from "./PlaylistHolder";

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
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

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

    const [playTracks, setPlayTracks] = useState([])





    const playTrack= (e) => {

      let newElement = [theLand.find((obj) => obj.name === e.target.innerText )]
        newElement.active = true
   setPlaylist(initPlaylist.concat(newElement))

    }
    let audio = new Audio()

    const getPlpay = () => {

        let playlist = []
       let i = 0
        initPlaylist.map((song,n) => {
            return (

                playlist[n] = song.src)
        })
        audio.addEventListener('ended', function () {
            i = ++i < playlist.length ? i : 0;
            console.log(i)
            audio.src = playlist[i];
            audio.play();
        }, true);
        audio.volume = 0.3;
        audio.loop = false;
        audio.src = playlist[0];
        audio.play();
    }
    const Pause = (audio) => {
        audio.pause()
    }
    const Clear = () => {
        setPlaylist([])
    }


    return (
        <>

                <div className="pl row">
                    <div className="col-sm-4">
                        <AlbumHolder  class = 'table '   onClick = {playTrack } Playlist = {theLand} key ={generateUniqueID} />
                    </div>
                     <div className="main col-sm-4"><div className="imgHolder">
                         <img src="https://m.media-amazon.com/images/I/71X9fvhnrML._SS500_.jpg" alt="img"/>
                     </div>
                         <MyButton  onClick={getPlpay} id='play'>play</MyButton>
                         <MyButton  onClick={Pause(audio)}  id='pause'>pause</MyButton>
                         <MyButton id='clear' onClick={Clear}>clear</MyButton>
                         <MyButton id='quit'>
                             {/*<audio  controls>*/}
                             {/*    <source src={initPlaylist[0].src}/>*/}
                             {/*</audio>*/}
                         </MyButton>
                     </div>
                     <div className="col-sm-4">
                         <PlaylistHolder  id= 'plist'  Playlist = {initPlaylist}  />
                     </div>
                </div>

        </>

    )

}
export default Player1;
