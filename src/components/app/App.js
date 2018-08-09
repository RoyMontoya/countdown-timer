import React, { Component } from 'react';
import './Style.css'
import Header from '../header/Header'
import Timer from '../timer/Timer'
import TimeForm from '../time-form/TimeForm'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      time:0
    }

    this.startCount = this.startCount.bind(this)
  }

  startCount(){
    const total = this.refs.form.calculateTotal()
    if(total)this.refs.timer.startCount(total);
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Timer ref="timer"/>
        <TimeForm ref="form"/>
        <button className="btn btn-success" onClick={this.startCount}>Start</button>
      </div>
    );
  }
}

export default App;
