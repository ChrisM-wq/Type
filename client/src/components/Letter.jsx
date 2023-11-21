import React, { useState } from 'react';

const Letter = () => {
    const getRandomClassName = () => {
        const classNames = ['letter', 'letterBlue', 'letterGreen'];
        const randomIndex = Math.floor(Math.random() * classNames.length);
        return classNames[randomIndex];
    };

    const getRandomKey = () => {
        const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~';
        const randomIndex = Math.floor(Math.random() * keys.length);
        return keys.charAt(randomIndex);
    };

    const [randomKey, setRandomKey] = useState(getRandomKey());
    const [randomClass, setRandomClass] = useState(getRandomClassName());

    return (
        <>
        <span className={getRandomClassName()}>
            <i>{getRandomKey()}</i>
        </span>
        </>
    );
};

export default Letter;