import React from "react";
import "./tile.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Tile(props){
    const {content} = props
    return (
        <div className="tile col-sm">
            {content}
        </div>
    )
}