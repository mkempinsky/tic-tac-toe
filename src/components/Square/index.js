import {useState} from 'react';

const Square = ({onSquareClick, value, isWinningSquare}) => {
    return (
        <div
            className={`square ${isWinningSquare ? 'winner' : ''}`}
            onClick={onSquareClick}>
            <div className="marker">{value}</div>
        </div>
    );
};
export default Square;
