import React, {Component} from 'react';
import TimeInput from '../time-input/TimeInput'
import './Style.css'

class TimeForm extends Component {

  render(){
    return (
      <div>
        <form className="time-form">
          <TimeInput name="days" min="0" max="7"/>
          <TimeInput name="hours" min="0" max="24"/>
          <TimeInput name="minutes" min="0" max="60"/>
          <TimeInput name="seconds" min="0" max="60"/>
        </form>
      </div>
    )
  }
}

export default TimeForm;
