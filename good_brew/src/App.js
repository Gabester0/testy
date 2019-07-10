import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  fetch('https://api.openbrewerydb.org/breweries')
  .then(response => response.json())
  .then(data => console.log(data))


  const axios = require('axios');
  
  const breweries = async () => {
    try {
      return await axios.get('https://api.openbrewerydb.org/breweries?by_state=pennsylvania')
    }
    catch (err){
      console.error(err)
    }
  }

  const paBreweries = async () => {
    const paBrew = await breweries()
    if(paBrew){
      console.log(paBrew);
    }
  }

  paBreweries();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hey I made this sort of TOTALLY</p>
      </header>
    </div>
  );
}

export default App;
