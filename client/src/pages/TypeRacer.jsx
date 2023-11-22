import { useNavigate } from "react-router-dom";
import CountDown from '../components/CountDown';
import StartBtn from '../components/StartBtn';
import socket from "../socketConfig";
import { useContext, useEffect } from "react";
import GameContext from "../context/GameContext";

import DisplayWords from '../components/DisplayWords';

import Form from '../components/Form';

import ProgressBar from '../components/ProgressBar';
import ScoreBoard from '../components/ScoreBoard';

import DisplayGameCode from '../components/DisplayGameCode';

const findPlayer = ( players ) => {
    return players.find(( player ) => player.socketID === socket.id);
}

const TypeRacer = () => {

    const { gameState, setGameState } = useContext(GameContext);

    const navigate = useNavigate();

    const { _id, players, words, isOpen, isOver } = gameState;
    const player = findPlayer(players);

    useEffect(() => {
        if (_id === "") {
            return navigate('/');
        }
    }, [gameState._id]);


    return (
        <div className="bg-[#303030] min-h-screen flex flex-col items-center p-20 gap-10">
            <DisplayWords words={words} player={player} />
            <ProgressBar players={players} player={player} wordsLength={words.length}/>
            <Form isOpen={isOpen} isOver={isOver} gameID={_id} />
            <CountDown />
            <StartBtn player={player} gameID={_id} />
            <DisplayGameCode gameID={_id} />
            <ScoreBoard players={players} />
        </div>
    )
};

export default TypeRacer;