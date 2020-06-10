import React from 'react';
import banana from '../static/Banana.svg'
import './App.css';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar dark/>
      <header className="App-header">
        <p>Content is in progress...</p>
        <img src={banana} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
