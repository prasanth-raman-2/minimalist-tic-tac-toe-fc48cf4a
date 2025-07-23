import React from 'react';

const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <button
          key={index}
          className={`square ${square?.toLowerCase() || ''}`}
          onClick={() => onClick(index)}
          aria-label={`Square ${index + 1}`}
        >
          {square}
        </button>
      ))}
    </div>
  );
};

export default Board;
