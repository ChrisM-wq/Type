import React from "react";

const getScoreBoard = ( players ) => {
    const scoreBoard = players.filter(player => player.WPM !== -1);
    return scoreBoard.sort((a, b) => a.WPM > b.WPM ? -1 : b.WPM > a.WPM ? 1 : 0);
}

const ScoreBoard = ({ players }) => {

    const scoreBoard = getScoreBoard( players );

    if (scoreBoard.length === 0) {
        return null;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>WPM</th>
                </tr>
            </thead>
            <tbody>
                {
                    scoreBoard.map(( player, index ) => {
                        return <tr>
                            <th>{index + 1}</th>
                            <td>{player.nickName}</td>
                            <td>{player.WPM}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
};

export default ScoreBoard;