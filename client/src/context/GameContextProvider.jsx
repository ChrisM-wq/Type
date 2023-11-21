import { useState } from 'react';
import GameContext from './GameContext';

const GameContextProvider = ({ children }) => {

    const [gameState, setGameState] = useState({
        _id: "",
        isOpen: false,
        players: [],
        words: []
    });

    return (
        <GameContext.Provider value={{ gameState, setGameState }}>
        {children}
        </GameContext.Provider>
    );
};

export default GameContextProvider;