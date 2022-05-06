import React from "react";
import "./../css/Review.css"
import { Artists } from "./data/ArtistsData";
import Review from "./Review";

export default function ReviewPage(props) {

    const reviewList =  Object.keys(Artists).map(function(key, index) {
        return (<Review data={Artists[key]} />)
        })

    return (
        <div>

          <main className="reviewContainer">
       
            <h1>Reviews</h1>
            
                <article className="review colour">

                    {reviewList}
                        
                </article>

            </main>
            
        </div>
    );
}
