import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const initailGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [players,setPlayers] = useState({
    X: "Player 1",
    O: "Player 2"
  });
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner,setHasWinner] = useState(false);
  // const [activePlayer,setActivePlayer] = useState("X");

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initailGameBoard.map((innerArray) => [...innerArray])];

  for (const gameTurn of gameTurns) {
    const { square, player } = gameTurn;
    const { raw, col } = square;

    // console.log(player);
    // console.log(raw);
    // console.log(col);

    gameBoard[raw][col] = player;
  }

  let winner;

  for(const combination of WINNING_COMBINATIONS){
    let firstElement = gameBoard[combination[0].row][combination[0].column];
    let secondElement = gameBoard[combination[1].row][combination[1].column];
    let thirdElement = gameBoard[combination[2].row][combination[2].column];

    if(firstElement && firstElement === secondElement && firstElement === thirdElement){
      winner = players[firstElement];
    }
  }

  // console.log(winner);

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rawIndex, colIndex) {
    // console.log(rawIndex,colIndex);
    // setActivePlayer((currentActivePlayer) => currentActivePlayer === "X" ? "O" : "X");
    setGameTurns((currentGameTurns) => {
      let currentPlayer = deriveActivePlayer(currentGameTurns);

      const updateGameTurns = [
        { square: { raw: rawIndex, col: colIndex }, player: currentPlayer },
        ...currentGameTurns,
      ];

      return updateGameTurns;
    });
  }

  function handleRestart(){
    setGameTurns([]);
  }

  function handlePlayersName(symbol,playerName){
    setPlayers((prevPlayers) => {
      const updatePlayers = {...prevPlayers};
      updatePlayers[symbol] = playerName;
      return updatePlayers;

      // return {
      //   ...prevPlayers,
      //   [symbol] : playerName
      // }
    });
  }

  console.log(players.X);
  console.log(players.O);

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onHandlePlayerName={handlePlayersName}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onHandlePlayerName={handlePlayersName}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
