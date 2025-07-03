import { useState } from "react";

const initailGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function GameBoard({ onSelectSquare, turns }){
    let gameBoard = initailGameBoard;

    for(const turn of turns){
        const { square, player } = turn;
        const { raw, col } = square;

        console.log(player);
        // console.log(raw);
        // console.log(col);

        gameBoard[raw][col] = player;
    }

    // const [gameBoard,setGameBoard] = useState(initailGameBoard);

    // function handleSelectSquare(rawIndex,colIndex){
    //     console.log(rawIndex,colIndex);
    //     setGameBoard((prevGameBoard) => {
    //         // get copy of existing array...
    //         const updateGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
    //         updateGameBoard[rawIndex][colIndex] = currentPlayer;
    //         return updateGameBoard;
    //     })
    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((raw,rawIndex) => (
                <li key={rawIndex}>
                    <ol>
                        {raw.map((col,colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rawIndex,colIndex)}>{col}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}