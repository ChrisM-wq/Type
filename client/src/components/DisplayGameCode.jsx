import React, { useRef, useState } from "react";

const DisplayGameCode = ({ gameID }) => {

    const [copySuccess, setCopySuccess] = useState(false);
    const textInputRef = useRef(null);

    const copyToClipboard = (e) => {
        navigator.clipboard.writeText(textInputRef.current.value);
        setCopySuccess(true);
    }


    return (
        <div className="flex my-3 text-center">
            <div></div>
            <div>
                <h4>Send this code to your friends</h4>
                <div>
                    <input
                        type="text"
                        ref={textInputRef}
                        value={gameID}
                        readOnly

                    />
                    <div>
                        <button onClick={copyToClipboard} type="button">Copy</button>
                    </div>
                </div>
                {copySuccess && <div>
                    Successfully Copied Game Code
                    </div>}
            </div>
            <div></div>
        </div>
    )
};

export default DisplayGameCode;