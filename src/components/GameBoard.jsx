import { useState } from "react";

const initailGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function GameBoard(){
    const [gameBoard,setGameBoard] = useState(initailGameBoard);

    function handleSelectSquare(rawIndex,colIndex){
        console.log(rawIndex,colIndex);
        setGameBoard((prevGameBoard) => {
            // get copy of existing array...
            const updateGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
            updateGameBoard[rawIndex][colIndex] = "X";
            return updateGameBoard;
        })
    }

    return (
        <ol id="game-board">
            {gameBoard.map((raw,rawIndex) => (
                <li key={rawIndex}>
                    <ol>
                        {raw.map((col,colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rawIndex,colIndex)}>{col}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}