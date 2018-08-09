import React, { Component } from 'react';
import './Style.css'
import Header from '../header/Header'
import Timer from '../timer/Timer'
import TimeForm from '../time-form/TimeForm'

class App extends Component {
  constructor(props){
    super(props);


    this.startCount = this.startCount.bind(this)
  }

  startCount(){
    this.refs.timer.startCount();
  }



  render() {
    return (
      <div className="App">
        <Header/>
        <Timer ref="timer"/>
        <TimeForm/>
        <button className="btn btn-success" onClick={this.startCount}>Start</button>
      </div>
    );
  }
}

export default App;
