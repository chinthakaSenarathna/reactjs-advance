import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';

function deriveActivePlayer(gameTurns){
  let currentPlayer = "X";

  if(gameTurns.length > 0 && gameTurns[0].player === "X"){
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns,setGameTurns] = useState([]);
  // const [activePlayer,setActivePlayer] = useState("X");

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rawIndex,colIndex){
    // console.log(rawIndex,colIndex);
    // setActivePlayer((currentActivePlayer) => currentActivePlayer === "X" ? "O" : "X");
    setGameTurns((currentGameTurns) => {
      let currentPlayer = deriveActivePlayer(currentGameTurns)

      const updateGameTurns = [{ square: { raw: rawIndex, col: colIndex }, player: currentPlayer },...currentGameTurns];

      return updateGameTurns;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
