// src/components/OracleCard.js
import React from 'react';
import './Card.css';

const OpponentOracleCard = ({ value, onClick }) => {
    return (
      <div className="card" onClick={onClick}>
        {value}
      </div>
    );
  };
  
  export default OpponentOracleCard;
  