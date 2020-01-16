import React from "react";
import "./story.css";

export default function Story(props){
    const {content, title, buttonMessage, linkTo, media } = props
    return (
        <div className="story">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                     <div className=""><a target="_blank" href={linkTo}>{media}</a></div>
                    </div>
                    <div className="col-md">
                        <h1>{title}</h1>
                        <p>{content}</p>
                        <a href={linkTo} target="_blank" className="btn btn-warning">{buttonMessage}</a>
                    </div>        
                </div>
            </div>
            
        </div>
    )
}