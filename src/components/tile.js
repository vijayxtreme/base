import React from "react";

export default function Tile(props){
    const {content} = props
    return (
        <div className="tile col-sm">
            {content}
        </div>
    )
}