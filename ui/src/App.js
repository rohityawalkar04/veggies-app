import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {

  const [userName, setUserName] = useState('');

  useEffect(() => {
    axios.get('http://localhost:80/getUser').then(resp => {
      setUserName(resp.data.name);
    })
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Learn React with {userName} !!!
      </header>
    </div>
  );
}

export default App;
