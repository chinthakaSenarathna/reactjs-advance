const initailGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function GameBoard(){
    return (
        <ol id="game-board">
            {initailGameBoard.map((raw,rawIndex) => (
                <li key={rawIndex}>
                    <ol>
                        {raw.map((col,colIndex) => (
                            <li key={colIndex}>
                                <button>{col}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}