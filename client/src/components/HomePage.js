import imageMe from "./../images/me.PNG";
import "../css/homePage.css"; 

export default function HomePage(props) {
    return (
        <div className="homeContainer">
            <h2 className="welcomeMessage">WELCOME HOME</h2>
            <img className="portraitImg" src={imageMe}  alt="Pic Alt Here"/>
            <div className="introText">

                <p className="intro">
                    Welcome to the site! 
                </p>
                <p className="introParagraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

            </div>
        </div>
    );
}