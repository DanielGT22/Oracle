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
  ['x', 'x','x', 'opponentOracle', 'x', 'x', 'x'],
  ['OpponentAmulet','x',  'card', 'card', 'card', 'card','x',  'OpponentTower'],
  ['x', 'card', 'card', 'card', 'card', 'x'],
  ['x', 'card', 'card', 'card', 'card', 'x'],
  ['x', 'card', 'card', 'card', 'card', 'x'],
  ['PlayerTower','x',  'card', 'card', 'card', 'card','x',  'PlayerAmulet'],
  ['x', 'x', 'x', 'playerOracle', 'x', 'x', 'x'],
];
const initialDeck = [
  { id: 1, name: 'A', manaCost: 1, damage: 2, health: 3 },
  { id: 2, name: '2', manaCost: 2, damage: 3, health: 4 },
  { id: 3, name: '3', manaCost: 3, damage: 4, health: 5 },
  { id: 4, name: '4', manaCost: 4, damage: 5, health: 6 },
  { id: 5, name: '5', manaCost: 5, damage: 6, health: 7 },
  { id: 6, name: '6', manaCost: 6, damage: 7, health: 8 },
  { id: 7, name: '7', manaCost: 7, damage: 8, health: 9 },
  { id: 8, name: '8', manaCost: 8, damage: 9, health: 10 },
  { id: 9, name: '9', manaCost: 9, damage: 10, health: 11 },
  { id: 10, name: '10', manaCost: 10, damage: 11, health: 12 },
  { id: 11, name: 'J', manaCost: 11, damage: 12, health: 13 },
  { id: 12, name: 'Q', manaCost: 12, damage: 13, health: 14 },
  { id: 13, name: 'K', manaCost: 13, damage: 14, health: 15 },
  // Add more cards up to 40
  { id: 14, name: 'A', manaCost: 1, damage: 2, health: 3 },
  { id: 15, name: '2', manaCost: 2, damage: 3, health: 4 },
  { id: 16, name: '3', manaCost: 3, damage: 4, health: 5 },
  { id: 17, name: '4', manaCost: 4, damage: 5, health: 6 },
  { id: 18, name: '5', manaCost: 5, damage: 6, health: 7 },
  { id: 19, name: '6', manaCost: 6, damage: 7, health: 8 },
  { id: 20, name: '7', manaCost: 7, damage: 8, health: 9 },
  { id: 21, name: '8', manaCost: 8, damage: 9, health: 10 },
  { id: 22, name: '9', manaCost: 9, damage: 10, health: 11 },
  { id: 23, name: '10', manaCost: 10, damage: 11, health: 12 },
  { id: 24, name: 'J', manaCost: 11, damage: 12, health: 13 },
  { id: 25, name: 'Q', manaCost: 12, damage: 13, health: 14 },
  { id: 26, name: 'K', manaCost: 13, damage: 14, health: 15 },
  { id: 27, name: 'A', manaCost: 1, damage: 2, health: 3 },
  { id: 28, name: '2', manaCost: 2, damage: 3, health: 4 },
  { id: 29, name: '3', manaCost: 3, damage: 4, health: 5 },
  { id: 30, name: '4', manaCost: 4, damage: 5, health: 6 },
  { id: 31, name: '5', manaCost: 5, damage: 6, health: 7 },
  { id: 32, name: '6', manaCost: 6, damage: 7, health: 8 },
  { id: 33, name: '7', manaCost: 7, damage: 8, health: 9 },
  { id: 34, name: '8', manaCost: 8, damage: 9, health: 10 },
  { id: 35, name: '9', manaCost: 9, damage: 10, health: 11 },
  { id: 36, name: '10', manaCost: 10, damage: 11, health: 12 },
  { id: 37, name: 'J', manaCost: 11, damage: 12, health: 13 },
  { id: 38, name: 'Q', manaCost: 12, damage: 13, health: 14 },
  { id: 39, name: 'K', manaCost: 13, damage: 14, health: 15 },
  { id: 40, name: 'A', manaCost: 1, damage: 2, health: 3 },
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
   
   