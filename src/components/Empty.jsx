// src/components/Card.js
import React from 'react';
import './Empty.css';

const Empty = ({ value, onClick }) => {
  return (
    <div className="empty" onClick={onClick}>
      {value}
    </div>
  );
};

export default Empty;
