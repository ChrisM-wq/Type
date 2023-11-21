import { useState } from "react";
import socket from "../socketConfig";

const StartBtn = ({ player, gameID }) => {

    const [showBtn, setShowBtn] = useState(true);

    const handleStart = (e) => {
        socket.emit('timer', { playerID: player._id, gameID });
        setShowBtn(false);
    };

    return (
        player?.isPartyLeader && showBtn ? <button
        type="button"
        onClick={handleStart}>
            Start Game
        </button> : null
    )
};

export default StartBtn;