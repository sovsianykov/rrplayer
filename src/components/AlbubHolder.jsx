import React from "react";
import  Table from 'react-bootstrap/Table/'
import Button from "./Button";

function AlbumHolder({Playlist, id, onClick }) {
    return (
        <>

            <div className='playlist' >
            {Playlist.map((song,index) => {
                return ( <Button  key = {{id} +Math.random() +song.id } onClick={onClick}>
                              {song.name}
                                                </Button>)
            } )}

            </div>


        </>

    )
}
export default AlbumHolder;

