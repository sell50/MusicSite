import React from "react";
import "./../css/Album.css"
import { Artists } from "./data/ArtistsData";
import Album from "./Album";

export default function AlbumPage(props) {

    const albumList = Object.keys(Artists).map(function(key, index) {
        return (<Album data={Artists[key]} />)
        })

    return (
        <div>
          <main className="albumContainer">

            <h1>Albums</h1>
            <article className="album colour">
                {albumList}
            </article>

            </main>
        </div>
    );
}
