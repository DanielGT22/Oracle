// src/App.js
import React from 'react';
import GameBoard from './components/GameBoard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Oracle</h1>
      </header>
      <GameBoard />
    </div>
  );
}

export default App;
