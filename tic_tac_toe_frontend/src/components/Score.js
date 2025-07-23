import React from 'react';

const Score = ({ xWins, oWins, draws }) => {
  return (
    <div className="score-board">
      <div className="score-item">
        <span>Player X</span>
        <span className="score-value">{xWins}</span>
      </div>
      <div className="score-item">
        <span>Draws</span>
        <span className="score-value">{draws}</span>
      </div>
      <div className="score-item">
        <span>Player O</span>
        <span className="score-value">{oWins}</span>
      </div>
    </div>
  );
};

export default Score;
