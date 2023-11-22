
const calculatePercentage = ( player, wordsLength ) => {
    if (player?.currentWordIndex !== 0) {
        return ((player?.currentWordIndex / wordsLength) * 100).toFixed(2) + "%";
    }
    return 0;
};

const ProgressBar = ({ players, player, wordsLength }) => {

    const percentage = calculatePercentage( player, wordsLength );

    return (
        <div className="w-1/2">
            {
                <>
                    <h5 className="text-left text-light font-semibold capitalize">{player?.nickName}</h5>
                    <div className="progress-bar" key={player?._id}>
                        <div className="progress-bar-fill" style={{ width: percentage }}>
                        <span className="progress-text">{percentage}</span>
                        </div>
                    </div>
                </>
            }
            {
                players.map((playerObj) => {
                    const percentage = calculatePercentage(playerObj, wordsLength);
                    return playerObj._id !== player._id ?
                        <>
                            <h5 className="text-left">{playerObj.nickName}</h5>
                            <div className="progress-bar" key={playerObj?._id}>
                        <div className="progress-bar-fill" style={{ width: percentage }}>
                        <span className="progress-text">{percentage}</span>
                        </div>
                    </div>
                        </> : null
                })
            }
        </div>
    )
};

export default ProgressBar;