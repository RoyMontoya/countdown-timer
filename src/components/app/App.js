import React, { Component } from 'react';
import './Style.css'
import {connect} from 'react-redux';
import Header from '../header/Header'
import Timer from '../timer/Timer'
import TimeForm from '../time-form/TimeForm'

class App extends Component {
  constructor(props){
    super(props);

    this.startCount = this.startCount.bind(this)
    this.isTimerNotEmpty = this.isTimerNotEmpty.bind(this)
  }

  isTimerNotEmpty(){
    return (this.props.day || this.props.hour || this.props.minute || this.props.second > 0);
  }

  startCount(){
    console.log(this.isTimerNotEmpty());
    // if(this.state.time)this.refs.timer.startCount(this.state.time);
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

export default connect((state) => ({day: state.day,
hour: state.hour,
minute: state.minute,
second: state.second
}))(App);
