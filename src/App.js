import { useState } from "react";
import Board from "./Board";

function App() {

  let [guess, setGuess] = useState('');
  let [boardState, setBoardState] = useState(Array(6).fill(Array(5).fill({color: 'white', letter: ''})));
  let [currentRow, setCurrentRow] = useState(0);

  function inputChangeHandler(e){
    setGuess(e.target.value);
    
  }

  function onGuessClick(){
    if(guess.length == 5)
    {
      let newState = boardState;
      let row = Array(5).fill().map(()=>({color:'gray', letter:''}));
      console.log(row[0] === row[1])
      for(let i = 0; i < 5; i++){
        row[i].letter = guess[i];
      }
      newState[currentRow] = row;
      setBoardState(newState);
      setCurrentRow(currentRow + 1);
    }
    console.log(guess);
    setGuess("");
  }

  return (
    <>
      <header>
        <h1>Strikle</h1>
      </header>
      <Board boardState = {boardState}/>
      <div>
        <input value={guess} onChange={inputChangeHandler}/>
        <button style={{marginLeft: '2px'}} onClick={onGuessClick}>{'>'}</button>
      </div>
    </>
  );
}

export default App;
