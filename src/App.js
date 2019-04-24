import React, { Component } from 'react';
import Calci from './calci.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Calculator</h1>
        <Calci />
      </div>
    );
  }
}

export default App;
