// src/components/Card.js
import React from 'react';
import './Card.css';

const OpponentTower = ({ value, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {value}
    </div>
  );
};

export default OpponentTower;
