import imageMe from "./../images/me.PNG";

import * as socials from "../components/data/SocialPics.js";

import "../css/homePage.css"; 

export default function HomePage(props) {
    return (
        <div className="homeContainer">
            <h2 className="welcomeMessage">WELCOME HOME</h2>
            <img className="portraitImg" src={imageMe}  alt=""/>
            <div className="introText">

                <p className="intro">
                    Welcome to the site! 
                </p>
                <p className="introParagraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* <div className="listContainer">
                    <div className="row-1 list">
                        <div className="col-1">
                            
                            <a className="" href="mailto:kat.pace.8@gmail.com">  
                                <img className="socialsPic" src={socials.emailstart} width="100px" height="100px" alt="black envelope picture"/> 
                                <img className="socialsPic2" src={socials.emailend} width="100px" height="100px" alt="blue envelope"/> 
                            </a>
                            <a className="" href="https://github.com/sell50">  
                                <img className="socialsPic" src={socials.githubstart} width="100px" height="100px" alt="black github logo"/> 
                                <img className="socialsPic2" src={socials.githubend} width="100px" height="100px" alt="white github logo with black border"/> 
                            </a>
                            <a className="" href="https://www.instagram.com/k.a.tp/">  
                                <img className="socialsPic" src={socials.instastart} width="100px" height="100px" alt="black and white instagram logo"/> 
                                <img className="socialsPic2" src={socials.instaend} width="100px" height="100px" alt="rainbow instagram logo"/> 
                            </a>

                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}