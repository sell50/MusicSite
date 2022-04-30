import React from "react";

export default function PageContent(props) {

    return (
        <div>
            <h2 className="pageContent">{props.tag}</h2>           
        </div>
    );
}