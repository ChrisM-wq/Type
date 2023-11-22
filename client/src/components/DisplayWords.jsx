

const typedCorrentlyStyle = {
    "backgroundColor": "#C4FA6F",
    "color": '#3A3F47',
    'fontWeight': 600
}

const getTypedWords = (words, player) => {
    console.log(words)
    let typedWords = words.slice(0, player?.currentWordIndex);
    typedWords = typedWords.join(" ");
    return <span style={typedCorrentlyStyle} className="py-1 rounded-lg">{typedWords}</span>
}

const currentStyle = {
    "textDecoration" : "underline",
    "textDecorationColor": "#C4FA6F"
}

const getCurrentWord = ( words, player) => {
    return <span style={currentStyle}>{words[player?.currentWordIndex]}</span>
};


const getWordsToBeTyped = ( words, player ) => {
    let wordsToBeTyped = words.slice(player?.currentWordIndex + 1, words.length);
    wordsToBeTyped = wordsToBeTyped.join(" ");
    return <span> {wordsToBeTyped}</span>
}

const DisplayWords = ({ words, player }) => {
    return (
        <div className="text-light text-lg ">
            { getTypedWords( words, player ) }
            { getCurrentWord( words, player ) }
            { getWordsToBeTyped( words, player ) }
        </div>
    )
};

export default DisplayWords;