// src/components/PlayerHand.js
import React from 'react';
import Card from './Card';
import './Hand.css';

const PlayerHand = ({ cards, onCardClick }) => {
  return (
    <div className="hand player-hand">
      {cards.map((card, index) => (
        <Card key={index} value={card.value} onClick={() => onCardClick(card.value)} />
      ))}
    </div>
  );
};

export default PlayerHand;
