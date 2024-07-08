// src/components/Card.js
import React from 'react';
import './Card.css';

const OpponentAmulet = ({ value, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {value}
    </div>
  );
};

export default OpponentAmulet;
