import React from "react";
import AlbumPage from "./AlbumPage";
import ArtistPage from "./ArtistPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import ReviewPage from "./ReviewPage";


import * as socials from "../components/data/SocialPics.js";

import "../css/homePage.css"; 

export default function Footer(props) {

    const footerNames = {
        page0: 'Home',
        page1: 'Artists',
        page2: 'Albums',
        page3: 'Reviews',
        page4: 'Contact'
    }

    return (
        <div className="listContainer">
                    <div className="row-1 list">
                        <div className="col-1">
                            
                            <a className="" href="mailto:kat.pace.8@gmail.com">  
                                <img className="emailPic" src={socials.emailstart} width="100px" height="100px" alt="black envelope picture"/> 
                                <img className="emailPic2" src={socials.emailend} width="100px" height="100px" alt="blue envelope"/> 
                            </a>
                            <a className="" href="https://github.com/sell50">  
                                <img className="githubPic" src={socials.githubstart} width="100px" height="100px" alt="black github logo"/> 
                                <img className="githubPic2" src={socials.githubend} width="100px" height="100px" alt="white github logo with black border"/> 
                            </a>
                            <a className="" href="https://www.instagram.com/k.a.tp/">  
                                <img className="instaPic" src={socials.instastart} width="100px" height="100px" alt="black and white instagram logo"/> 
                                <img className="instaPic2" src={socials.instaend} width="100px" height="100px" alt="rainbow instagram logo"/> 
                            </a>

                        </div>
                    </div>
                </div>
    );
}