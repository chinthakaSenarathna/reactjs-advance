import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onHandlePlayerName }){
    const [playerName,setPlayerName] = useState(initialName);
    const [isEditing,setIsEditing] = useState(false);

    function handleEditeClick(){
        // update state value based on previous value... -> functional form...
        setIsEditing((editing) => !editing);

        if(isEditing){
            onHandlePlayerName(symbol,playerName);
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if(isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    }

    return (
        <li className={isActive? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button type="button" onClick={handleEditeClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}