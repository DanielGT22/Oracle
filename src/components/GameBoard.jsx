// src/components/GameBoard.js
import React, { useState, useEffect } from 'react';
import Card from './Card';
import OpponentOracleCard from "./OpponentOracleCard"
import PlayerOracleCard from "./PlayerOracleCard"
import OpponentTower from "./OpponentTower"
import OpponentAmulet from "./OpponentAmulet"
import PlayerTower from "./PlayerTower"
import PlayerAmulet from "./PlayerAmulet"
import './GameBoard.css';
import OpponentHand from './OpponentHand';
import PlayerHand from './PlayerHand';

const boardLayout = [
  ['x', 'x', 'opponentOracle', 'x', 'x', 'x'],
  ['OpponentAmulet', 'card', 'card', 'card', 'card', 'OpponentTower'],
  ['x', 'card', 'card', 'card', 'card', 'x'],
  ['x', 'card', 'card', 'card', 'card', 'x'],
  ['x', 'card', 'card', 'card', 'card', 'x'],
  ['PlayerTower', 'card', 'card', 'card', 'card', 'PlayerAmulet'],
  ['x', 'x', 'playerOracle', 'x', 'x', 'x'],
];
const initialDeck = [
  { id: 1, value: 'A' },
  { id: 2, value: '2' },
  { id: 3, value: '3' },
  { id: 4, value: '4' },
  { id: 5, value: '5' },
  { id: 6, value: '6' },
  { id: 7, value: '7' },
  { id: 8, value: '8' },
  { id: 9, value: '9' },
  { id: 10, value: '10' },
  { id: 11, value: 'J' },
  { id: 12, value: 'Q' },
  { id: 13, value: 'K' },
  { id: 14, value: 'A' },
  { id: 15, value: '2' },
  { id: 16, value: '3' },
  { id: 17, value: '4' },
  { id: 18, value: '5' },
  { id: 19, value: '6' },
  { id: 20, value: '7' },
  { id: 21, value: '8' },
  { id: 22, value: '9' },
  { id: 23, value: '10' },
  { id: 24, value: 'J' },
  { id: 25, value: 'Q' },
  { id: 26, value: 'K' },
  { id: 27, value: 'A' },
  { id: 28, value: '2' },
  { id: 29, value: '3' },
  { id: 30, value: '4' },
  { id: 31, value: '5' },
  { id: 32, value: '6' },
  { id: 33, value: '7' },
  { id: 34, value: '8' },
  { id: 35, value: '9' },
  { id: 36, value: '10' },
];

const shuffleDeck = (deck) => {
  return deck.sort(() => 0.5 - Math.random());
};

const GameBoard = () => {
  const [deck, setDeck] = useState([]);
  const [opponentHand, setOpponentHand] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);

  useEffect(() => {
    const shuffledDeck = shuffleDeck(initialDeck);
    setDeck(shuffledDeck);
    setOpponentHand(shuffledDeck.slice(0, 6)); // Assign first 6 cards to opponent's hand
    setPlayerHand(shuffledDeck.slice(6, 12)); // Assign next 6 cards to player's hand
  }, []);

  const handleCardClick = (value) => {
    alert(`Card clicked: ${value}`);
  };

  const renderBoard = () => {
    let cardIndex = 12; // Start after the hands

    return boardLayout.map((row, rowIndex) => (
      <div key={rowIndex} className="board-row">
        {row.map((cell, cellIndex) => {
          if (cell === 'x') {
            return <div key={cellIndex} className="cell empty-cell"></div>;
          } else if (cell === 'opponentOracle') {
            return (
              <OpponentOracleCard
                key={cellIndex}
                value="Opponent Oracle"
                onClick={() => handleCardClick('Opponent Oracle')}
              />
            );
          } else if (cell === 'playerOracle') {
            return (
              <PlayerOracleCard
                key={cellIndex}
                value="Player Oracle"
                onClick={() => handleCardClick('Player Oracle')}
              />
            );
          } else if (cell === 'card' && cardIndex < deck.length) {
            const card = deck[cardIndex++];
            return (
              <Card key={cellIndex} 
               value={card.value} 
               onClick={() => handleCardClick(card.value)} />
            );
          }  else if (cell === 'OpponentAmulet' && cardIndex < deck.length) {
            const card = deck[cardIndex++];
            return (
              <OpponentAmulet key={cellIndex} 
               value="OpponentAmulet" 
               onClick={() => handleCardClick(card.value)} />
            );
          }  else if (cell === 'OpponentTower' && cardIndex < deck.length) {
            const card = deck[cardIndex++];
            return (
              <OpponentTower key={cellIndex} 
               value="OpponentTower" 
               onClick={() => handleCardClick(card.value)} />
            );
          }  else if (cell === 'PlayerAmulet' && cardIndex < deck.length) {
            const card = deck[cardIndex++];
            return (
              <PlayerAmulet key={cellIndex} 
               value="PlayerAmulet"
               onClick={() => handleCardClick(card.value)} />
            );
          }  else if (cell === 'PlayerTower' && cardIndex < deck.length) {
            const card = deck[cardIndex++];
            return (
              <PlayerTower key={cellIndex} 
               value="PlayerTower"
               onClick={() => handleCardClick(card.value)} />
            );
          } else {
            return <div key={cellIndex} 
             className="cell"></div>;
          }
        })}
      </div>
    ));
  };

  return (
    <div className="game-board">
      <OpponentHand cards={opponentHand} onCardClick={handleCardClick} />
      {renderBoard()}
      <PlayerHand cards={playerHand} onCardClick={handleCardClick} />
    </div>
  );
};

export default GameBoard;
