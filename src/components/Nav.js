import React from "react";
import AlbumPage from "./AlbumPage";
import ArtistPage from "./ArtistPage";
import ContactPage from "./ContactPage";
import ReviewPage from "./ReviewPage";
import HomePage from "./HomePage";

export default function Nav(props) {
    
    const navNames = {
        page0: 'Home',
        page1: 'Artists',
        page2: 'Albums',
        page3: 'Reviews',
        page4: 'Contact'
    }

    return (
        <div>
            <nav>
                <ul className="navUL">
                    <button className="navLinks" onClick={() => {
                        props.onButtonClick(<HomePage />)
                    }}>
                        {navNames.page0}
                    </button>
                    <button className="navLinks" onClick={() => {
                        props.onButtonClick(<ArtistPage />)
                    }}>
                        {navNames.page1}
                    </button>
                    <button className="navLinks" onClick={() => {
                        props.onButtonClick(<AlbumPage />)
                    }}>
                        {navNames.page2}
                    </button>
                    <button className="navLinks" onClick={() => {
                        props.onButtonClick(<ReviewPage />)
                    }}>
                        {navNames.page3}
                    </button>
                    <button className="navLinks" onClick={() => {
                        props.onButtonClick(<ContactPage />)
                    }}>
                        {navNames.page4}
                    </button>
                </ul>
            </nav>
        </div>    
    );
}