export default function GameBoard({ onSelectSquare, board }){

    return (
        <ol id="game-board">
            {board.map((raw,rawIndex) => (
                <li key={rawIndex}>
                    <ol>
                        {raw.map((col,colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rawIndex,colIndex)} disabled={col !== null}>
                                    {col}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}