// src/components/PlayerHand.js
import React from 'react';
import './Hand.css';

const PlayerHand = ({ cards, onCardClick }) => {
  return (
    <div className="hand player-hand">
      {cards.map(card => (
        <div key={card.id} className="card" onClick={() => onCardClick(card)}>
          <div>Name: {card.name}</div>
          <div>Mana Cost: {card.manaCost}</div>
          <div>Damage: {card.damage}</div>
          <div>Health: {card.health}</div>
        </div>
      ))}
    </div>
  );
};

export default PlayerHand;
