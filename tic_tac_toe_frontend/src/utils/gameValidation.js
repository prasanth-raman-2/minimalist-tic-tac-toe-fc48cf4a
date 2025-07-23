/**
 * Utility functions for validating game state and moves
 */

export const validateMove = (board, position) => {
  if (position < 0 || position > 8) return false;
  return board[position] === null;
};

export const checkDiagonalWin = (board) => {
  const diagonals = [
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  return diagonals.some(([a, b, c]) => 
    board[a] && board[a] === board[b] && board[a] === board[c]
  );
};

export const isGameBoardFull = (board) => {
  return board.every(cell => cell !== null);
};
