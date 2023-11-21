import { useState } from "react";
import socket from "../socketConfig";

const JoinGame = () => {

    const [userInput, setUserInput] = useState({
        gameID: "",
        nickName: ""
    });

    const handleInputChange = (e) => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        });
    };

    const handleCreateGame = (e) => {
        e.preventDefault();
        console.log(userInput);
        socket.emit('join-game', userInput);
    };

    return (
        <div className="bg-[#303030] min-h-screen flex flex-col w-full items-center p-20">
            <div className="flex flex-col gap-20">
                <h1 className='text-secondary font-bold text-9xl drop-shadow-lg'>Join Game</h1>
                <form onSubmit={handleCreateGame} className="flex flex-col gap-5">
                    <div className="flex gap-2 items-center">
                        <label className="text-light">Enter Game ID</label>
                        <input
                            type="text"
                            name="gameID"
                            value={userInput.gameID}
                            onChange={handleInputChange}
                            placeholder="Enter Game ID"
                            className="bg-black px-2 py-1 text-light rounded-md"
                        />
                    </div>
                    <div className="flex gap-2 items-center">
                        <label className="text-light">Enter NickName</label>
                        <input
                            type="text"
                            name="nickName"
                            value={userInput.nickName}
                            onChange={handleInputChange}
                            placeholder="Enter Nick Name"
                            className="bg-black px-2 py-1 text-light rounded-md"
                        />
                    </div>
                    <button className='py-4 bg-primary rounded-tr-3xl rounded-bl-3xl font-bold text-2xl text-secondary'>Submit</button>
                </form>
            </div>
        </div>
    )
};

export default JoinGame;