const calculateWinner = (squares) => {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // rows
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // columns
        [0, 4, 8],
        [2, 4, 6], // diagonals
    ];

    for (let line of winningCombos) {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {hasWinner: squares[a], winningLine: line};
        }
    }
    return {hasWinner: false, winningLine: []};
};
export default calculateWinner;
