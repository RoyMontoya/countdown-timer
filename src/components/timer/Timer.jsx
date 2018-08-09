import React, {Component} from 'react';
import './Timer.css'
import TimeBox from '../timebox/TimeBox'

class Timer extends Component{

  render(){
    return(
      <div className="timer">
        <TimeBox text={'Days'} />
        <TimeBox text={'Hours'} />
        <TimeBox text={'Minutes'} />
        <TimeBox text={'Seconds'} />
      </div>
    )
  }

}
export default Timer;
