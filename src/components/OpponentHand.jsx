// src/components/OpponentHand.js
import React from 'react';
import Card from './Card';
import './Hand.css';

const OpponentHand = ({ cards, onCardClick }) => {
  return (
    <div className="hand opponent-hand">
      {cards.map((card, index) => (
        <Card key={index} value={card.value} onClick={() => onCardClick(card.value)} />
      ))}
    </div>
  );
};

export default OpponentHand;
