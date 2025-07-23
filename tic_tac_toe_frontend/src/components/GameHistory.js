import React from 'react';

const GameHistory = ({ history }) => {
  return (
    <div className="game-history">
      <h3>Game History</h3>
      <ul className="history-list">
        {history.map((result, index) => (
          <li key={index} className="history-item">
            Game {index + 1}: {result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameHistory;
