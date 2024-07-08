// src/components/Card.js
import React from 'react';
import './Card.css';

const PlayerAmulet = ({ value, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {value}
    </div>
  );
};

export default PlayerAmulet;
