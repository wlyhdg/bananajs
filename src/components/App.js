import React from 'react';
import BananaSVG from '../static/Banana.svg'
import BananaLogo from '../static/Banana.png'
import './App.scss';
import Navbar from './navbar/Navbar';
import Deck from './Deck/Deck';
import Lens from './Lens/Lens'

function App() {
  return (
    <div className="App">
      <Navbar 
        title='Banana' 
        subtitle='JS' 
        logo={BananaLogo} 
        dark
      />
      <header className="App-header">
        <p>Content is in progress...</p>
        <img src={BananaSVG} className="App-logo" alt="logo" />
      </header>
      <Lens />
      <Deck />
    </div>
  );
}

export default App;
