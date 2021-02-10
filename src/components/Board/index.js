import {useState} from 'react';
import Square from '../Square';
import calculateWinner from '../../functions/calculateWinner';

const Board = (props) => {
    const initialSquares = Array(9).fill(null);
    const [squares, setSquares] = useState(initialSquares);
    const [xIsNext, setXIsNext] = useState(true);

    const handleSquareClick = (i) => {
        const newSquares = [...squares];
        newSquares[i] = xIsNext ? 'x' : 'o';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
        return;
    };

    const handleReset = () => {
        const resetSquares = Array(9).fill(null);
        setSquares(resetSquares);
        setXIsNext(true);
    };

    const {hasWinner, winningLine} = calculateWinner(squares);

    return (
        <div className="board__container">
            {hasWinner && <div>Winner!!! Congrats ✨ player {hasWinner}</div>}
            <div>Player Turn: {xIsNext ? 'x' : 'o'}</div>
            <div className={`board ${hasWinner ? 'hasWinner' : ''}`}>
                {initialSquares.map((item, index) => {
                    const value = squares[index];
                    const isWinningSquare = winningLine.includes(index);
                    return (
                        <div key={index}>
                            <Square
                                isWinningSquare={isWinningSquare}
                                onSquareClick={() => handleSquareClick(index)}
                                value={value}
                            />
                        </div>
                    );
                })}
            </div>
            <button onClick={handleReset}>Reset Game</button>
        </div>
    );
};
export default Board;
