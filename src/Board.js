import React from "react";

function Tile(props){
    return (
        <div className="tile"></div>
    );
}

export default function Board(props){
    
    let tiles = [];
    let key = 1;
    for(let row = 0; row < 5; row++)
    {
        for(let col = 0; col < 6; col++)
        {
            tiles.push(<Tile key={key} row={row} col={col}/>);
            key++;
        }
    }

    return (
        <div className="boardContainer">
            {tiles}
        </div>
    )
}
