
export default function Artist(props) {
    return (
        <div>
            
           <section class="artistSection">

                <img className="artistPic" src={props.data.Artist_Picture} 
                    alt={props.data.Picture_Alt} />

                <h2>
                    {props.data.Artist_Name}
                </h2>

                <p>
                    Age: {props.data.Age}
                </p>

                <p>
                    Label: {props.data.Label}
                </p>

                <p>
                    Awards: {props.data.Awards}
                </p>
                
           </section>
           
    
    </div>
    );
}