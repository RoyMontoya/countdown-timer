import React, {Component} from 'react';
import './Style.css'
import TimeBox from '../timebox/TimeBox'
import miliUtil from '../../utilities/MilisecondsUtil'

class Timer extends Component{
  constructor(props){
    super(props);

    this.state = {
      default: 1534446000000,
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
    }

    this.startCount = this.startCount.bind(this);
    this.displaySeconds = this.displaySeconds.bind(this);
    this.displayMinutes = this.displayMinutes.bind(this);
    this.displayHours = this.displayHours.bind(this);
    this.displayTime = this.displayTime.bind(this);
  }

  startCount(time){
    setInterval(() =>{
      const timeLeft = time - Date.now();
      this.displayTime(timeLeft)
    },1000)
  }

  displaySeconds(timeLeft){
    const secondsLeft = miliUtil.getSecondsFromMili(timeLeft)
    this.setState({seconds: secondsLeft})
  }

  displayMinutes(timeLeft){
    const minutesLeft = miliUtil.getTimeFromMili(timeLeft, 'minute')
    this.setState({minutes: minutesLeft})
    this.displaySeconds(miliUtil.getTimeLeftInMili(timeLeft, minutesLeft,'minute'))
  }

  displayHours(timeLeft){
    const hoursLeft = miliUtil.getTimeFromMili(timeLeft, 'hour')
    this.setState({hours: hoursLeft})
    this.displayMinutes(miliUtil.getTimeLeftInMili(timeLeft, hoursLeft, 'hour'))
  }

  displayTime(timeLeft){
    const daysLeft = miliUtil.getTimeFromMili(timeLeft, 'day')
    this.setState({days: daysLeft})
    this.displayHours(miliUtil.getTimeLeftInMili(timeLeft, daysLeft, 'day'))
  }

  render(){
    return(
      <div className="timer">
        <TimeBox text={'Days'} value={this.state.days}/>
        <TimeBox text={'Hours'} value={this.state.hours}/>
        <TimeBox text={'Minutes'} value={this.state.minutes}/>
        <TimeBox text={'Seconds'} value = {this.state.seconds}/>
      </div>
    )
  }

}
export default Timer;
