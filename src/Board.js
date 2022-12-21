import React from "react";

function Tile(props){
    return (
        <div className={"tile " + props.color}>
            <p className="letter">{props.letter}</p>
        </div>
    );
}

export default function Board(props){
    
    let tiles = [];
    let key = 1;
    for(let row = 0; row < 6; row++)
    {
        for(let col = 0; col < 5; col++)
        {
            // let color = props.boardState[row][col].color;
            // let letter = props.boardState[row][col].letter;
            //console.log(props.boardState[row][col].color);
            tiles.push(<Tile key={key} row={row} col={col} color={props.boardState[row][col].color} letter={props.boardState[row][col].letter}/>);
            key++;
        }
    }

    return (
        <div className="boardContainer">
            {tiles}
        </div>
    )
}
