import { useState, useCallback } from 'react';
import { GAME_CONFIG } from '../config/gameConfig';

export const useGameState = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(GAME_CONFIG.PLAYERS.X);
  
  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer(GAME_CONFIG.PLAYERS.X);
  }, []);

  return {
    board,
    setBoard,
    currentPlayer,
    setCurrentPlayer,
    resetGame
  };
};
