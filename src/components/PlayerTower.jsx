// src/components/Card.js
import React from 'react';
import './Card.css';

const PlayerTower = ({ value, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {value}
    </div>
  );
};

export default PlayerTower;
