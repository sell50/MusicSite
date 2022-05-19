import React from "react";
import "./../css/Artist.css";
import { Artists } from "./data/ArtistsData";
import Artist from "./Artist";

export default function ArtistPage() {

    const artistList = Object.keys(Artists).map(function(key) {
        return (<Artist data={Artists[key]} />)
    })

    return (
        <div>
              
            <main className="artistContainer">
            
                <h1>Artists</h1>
                <article className="artist">
                    {artistList}
                </article>

            </main>
        </div>
    );
}