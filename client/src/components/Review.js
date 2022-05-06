import "../css/Review.css";

export default function Review(props) {

    const opinion = (
        <div className="opinion">
            <p className="opinionQ">What about you?</p>
            <button className="opinionButtonLove" type="button">Love It</button>
            <button className="opinionButtonHate" type="button">Hate It</button>
            <button className="opinionButtonUnsure" type="button">Not Sure</button> 
        </div>
    )

    const albumList = props.data.Albums?.map(element => {
        return(
            <div className="reviewListConst">
                <p className="reviewName">
                    {" " + element.Album_Name + " "}
                </p>
                <img className="albumReviewPic" src={element.Album_Picture} 
                    alt="Ariana Grande Looking to the Left with Her Hands on Her Lip" />
                <p className="reviewedOn">
                    {"Reviewed On: " + element.ReviewDate + " "}
                </p>
                <p class="reviewAlbums">
                    {" " + element.Review + " "}
                </p>

                {opinion}
                
            </div>
              )
            }
        )

    return (
        <div>
            
           <section className="reviewSection">
               <h2 className='reviewArtistName'>{props.data.Artist_Name}</h2>

                {/* put in bubble next to name*/}
               <img className="artistReviewPic" src={props.data.Artist_Picture} 
                    alt="Ariana Grande Looking to the Left with Her Hands on Her Lip" />
               
               <p className="albumList">
                   {albumList}
               </p>
               
               

           </section>
           
    
    </div>
    );
}