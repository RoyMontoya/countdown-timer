import React, { Component } from 'react';
import './Style.css'
import {connect} from 'react-redux';
import Header from '../header/Header'
import Timer from '../timer/Timer'
import TimeForm from '../time-form/TimeForm'
import miliUtil from '../../utilities/MilisecondsUtil'

class App extends Component {
  constructor(props){
    super(props);

    this.startCount = this.startCount.bind(this)
    this.isTimerNotEmpty = this.isTimerNotEmpty.bind(this)
    this.calculateTotal = this.calculateTotal.bind(this)
  }

  isTimerNotEmpty(){
    return (this.props.day || this.props.hour || this.props.minute || this.props.second > 0);
  }

  startCount(){
    if(this.isTimerNotEmpty())this.refs.timer.startCount(this.calculateTotal());
  }

  calculateTotal(){
    return miliUtil.getTimeInMili(this.props.day, 'day') +
    miliUtil.getTimeInMili(this.props.hour, 'hour') +
    miliUtil.getTimeInMili(this.props.minute, 'minute') +
    miliUtil.getTimeInMili(this.props.second, 'second');
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Timer ref="timer"/>
        <TimeForm />
        <button className="btn btn-success" onClick={this.startCount}>Start</button>
      </div>
    );
  }
}

export default connect((state) => ({
day: state.day,
hour: state.hour,
minute: state.minute,
second: state.second
}))(App);
