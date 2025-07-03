export default function Log({ turns }){
    return (
        <ol id="log">
            {turns.map((turn) => (
                <li key={`${turn.square.raw}${turn.square.col}`}>{turn.player} selected {turn.square.raw},{turn.square.col}</li>
            ))}
        </ol>
    );
}