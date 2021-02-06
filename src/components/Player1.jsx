import React from "react";
import MyButton from "./Button";
import AlbumHolder from "./AlbubHolder";





function Player1() {

    return (
        <>

                <div className="pl">
                    <div className="imgHolder">
                        <img src="https://m.media-amazon.com/images/I/71X9fvhnrML._SS500_.jpg" alt="img"/>
                    </div>
                    <MyButton id='play'>play</MyButton>
                    <MyButton id='pause'>pause</MyButton>
                    <MyButton id='add'>add to playlist</MyButton>
                    <MyButton id='quit'>quit</MyButton>
                    <AlbumHolder/>
                </div>

        </>

    )

}
export default Player1;
