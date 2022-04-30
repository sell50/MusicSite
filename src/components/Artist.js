
export default function Artist(props) {
    return (
        <div>
            
           <section class="artistSection">

                <img className="artistPic" src={props.data.Artist_Picture} 
                    alt="Ariana Grande Looking to the Left with Her Hands on Her Lip" />

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