// src/components/OracleCard.js
import React from 'react';
import './Card.css';

const playerOracleCard = ({ value, onClick }) => {
    return (
      <div className="card" onClick={onClick}>
        {value}
      </div>
    );
  };
  
  export default playerOracleCard;
  