import title from '../images/titlebw.png';
import React from "react";

export default function Header(props) {
    return (
        <div>
            <img className="headerImg" src={title}  alt="Review the Sound in white letters and black background"/>
        </div>
    );
}
