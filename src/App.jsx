import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';

function App() {
  const [gameTurns,setGameTurns] = useState([]);
  const [activePlayer,setActivePlayer] = useState("X");

  function handleSelectSquare(rawIndex,colIndex){
    // console.log(rawIndex,colIndex);
    setActivePlayer((currentActivePlayer) => currentActivePlayer === "X" ? "O" : "X");
    setGameTurns((currentGameTurns) => {
      let currentPlayer = "X";

      if(currentGameTurns.length > 0 && currentGameTurns[0].player === "X"){
        currentPlayer = "O";
      }

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
      LOG
    </main>
  )
}

export default App
