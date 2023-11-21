import './App.css'
import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect } from 'react';
import socket from './socketConfig';
import GameContext from './context/GameContext';

const App = () => {
    const navigate = useNavigate();

    const { gameState, setGameState } = useContext(GameContext);

    useEffect(() => {
        socket.on('updateGame', ( game ) => {
            setGameState(game);
        });
        return () => {
            socket.removeAllListeners();
        }
    }, []);

    useEffect(() => {
        if(gameState._id !== "") {
            navigate(`/game/${gameState._id}`);
        }
    }, [gameState._id])


    return (
        <Outlet />
    )
};

export default App
