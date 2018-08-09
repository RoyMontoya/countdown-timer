import React, {Component} from 'react';
import TimeInput from '../time-input/TimeInput'
import './Style.css'

class TimeForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  render(){
    return (
      <div>
        <form className="time-form">
          <TimeInput name="days" value={this.state.days} min="0" max="7"/>
          <TimeInput name="hours" value={this.state.hours} min="0" max="24"/>
          <TimeInput name="minutes" value={this.state.minutes} min="0" max="60"/>
          <TimeInput name="seconds" value={this.state.seconds} min="0" max="60"/>
        </form>
      </div>
    )
  }
}

export default TimeForm;
