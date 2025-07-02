import { useState } from "react";

export default function Player({ name, symbol }){
    const [isEditing,setIsEditing] = useState(false);

    function handleEditeClick(){
        // update state value based on previous value...
        setIsEditing((editing) => !editing);
    }

    let playerName = <span className="player-name">{name}</span>;

    if(isEditing){
        playerName = <input type="text" required value={name}/>
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button type="button" onClick={handleEditeClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}