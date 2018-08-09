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
    this.getTotal = this.getTotal.bind(this)

  }

  startCount(){
    console.log(this.refs.form.calculateTotal());
    this.refs.timer.startCount(this.refs.form.calculateTotal() + Date.now());
  }

  getTotal(total){
    this.setState({time: total})
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
