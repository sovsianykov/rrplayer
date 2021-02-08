import React from "react";
import  Table from 'react-bootstrap/Table/'
import Button from "./Button";


function PlaylistHolder({Playlist, id, onClick }) {
    return (
        <>
                    <div className='playlist' >

                        {Playlist.map((song,i) => {
                            return ( <audio controls  key = {`${song}_${i}`} ><source  src={song.src} className='list'  /></audio>)
                        } )}

                    </div>

        </>
    )
}
export default PlaylistHolder;

