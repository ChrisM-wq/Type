import { useState } from "react";
import socket from "../socketConfig";

const CreateGame = () => {

    const [nickName, setNickName] = useState("");

    const handleNickNameChange = (e) => {
        setNickName(e.target.value);
    };

    const handleCreateGame = (e) => {
        e.preventDefault();
        socket.emit('create-game', nickName);
    };

    return (
        <div className="bg-[#303030] min-h-screen flex flex-col w-full items-center p-20">
           
            <div className="flex flex-col gap-20">
                <h1 className='text-secondary font-bold text-9xl drop-shadow-lg'>Create Game</h1>
                <form onSubmit={handleCreateGame} className="flex flex-col gap-5">
                    <div className="flex gap-2 items-center">
                        <label htmlFor="nickName" className="text-light">Enter Nick Name</label>
                        <input
                            id="nickName"
                            type="text"
                            name="nickName"
                            value={nickName}
                            onChange={handleNickNameChange}
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

export default CreateGame;