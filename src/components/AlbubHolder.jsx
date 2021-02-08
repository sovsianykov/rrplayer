import React from "react";
import Button from "./Button";


function AlbumHolder({Playlist, id, onClick }) {
    return (
        <>
            <div className='playlist' >

                           {Playlist.map((song,i) => {
                               return ( <Button className='list'  key = {`${song}_${i}`} onClick={onClick} >
                                   {song.name}
                               </Button>)
                           } )}
            </div>

        </>

    )
}
export default AlbumHolder;

