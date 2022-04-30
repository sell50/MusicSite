
export default function Album(props) {

    const albumList = props.data.Albums?.map(element => {
        return(
            <div class="ArtistAlbums">
                <p className="albumSongs">
                    {element.Album_Name}
                </p>
                <img class="ArtistsAlbum-image" src={element.Album_Picture} alt="Ariana Grande"/>
                <p className="albumSongs">
                    {element.Songs.map(song =>{
                        return(
                            <p>
                                {song}
                            </p>
                        )
                    })}
                </p>
            </div>
              )
            }
        )

    return (
        <div>
            
           <section class="albumsSection">
               <h2 class="Albums-Name">{props.data.Artist_Name}</h2>

               <img class="Albums-Image" src={props.data.Artist_Picture} 
                    alt="Ariana Grande Looking to the Left with Her Hands on Her Lip" />

               <p className="albumTitle">Albums</p>

                {albumList}

           </section>
           
    
    </div>
    );
}