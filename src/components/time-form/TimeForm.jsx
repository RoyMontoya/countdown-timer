import React, {Component} from 'react';
import TimeInput from '../time-input/TimeInput'
import './Style.css'
import miliUtil from '../../utilities/MilisecondsUtil'

class TimeForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      totalMili: 0,
    }

    this.handleChange = this.handleChange.bind(this)
    this.calculateTotal = this.calculateTotal.bind(this)
  }

  calculateTotal(){
    const total = miliUtil.getTimeInMili(this.state.day, 'day') +
    miliUtil.getTimeInMili(this.state.hour, 'hour') +
    miliUtil.getTimeInMili(this.state.minute, 'minute') +
    miliUtil.getTimeInMili(this.state.second, 'second');

    console.log(total);

  }

  handleChange(name, value){
    console.log(name, value);
    const result = {...this.state}
    result[name] = value
    this.setState(result)
  }

  render(){
    // console.log(this.state);
    this.calculateTotal();
    return (
      <div>
        <form className="time-form">
          <TimeInput name="day" handle={this.handleChange} min="0" max="7"/>
          <TimeInput name="hour" handle={this.handleChange} min="0" max="24"/>
          <TimeInput name="minute" handle={this.handleChange} min="0" max="60"/>
          <TimeInput name="second" handle={this.handleChange} min="0" max="60"/>
        </form>
      </div>
    )
  }
}

export default TimeForm;
