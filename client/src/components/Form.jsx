import { useEffect, useRef, useState } from "react"
import socket from "../socketConfig";

const Form = ({ isOpen, isOver, gameID }) => {

    const [userInput, setUserInput] = useState("");

    const textInput = useRef(null);

    useEffect(() => {
        if (!isOpen) {
            textInput.current.focus();
        }
    }, [isOpen])

    const resetForm = () => {
        setUserInput("");
    };

    const handleUserInput = (e) => {
        let value = e.target.value;
        let lastChar = value.charAt(value.length - 1);
        if (lastChar === " ") {
            socket.emit('userInput', { userInput, gameID });
            resetForm();
        } else {
            setUserInput(e.target.value);
        }
    };

    return (
        <div>
            <div></div>
            <div>
                
                    <div>
                        <input type="text" readOnly={isOpen || isOver} onChange={handleUserInput} value={userInput} ref={textInput}/>
                    </div>
               
            </div>
            <div></div>
        </div>
    )
};

export default Form;