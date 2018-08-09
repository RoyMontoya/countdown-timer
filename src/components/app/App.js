import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header'
import Timer from '../timer/Timer'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <Header/>
        <Timer/>
      </div>
    );
  }
}

export default App;
