import React, {Component} from 'react';
import TimeInput from '../time-input/TimeInput'
import './Style.css'
import {updateMiliTime} from '../../reducers/timeReducer'
import {connect} from 'react-redux';
import miliUtil from '../../utilities/MilisecondsUtil'

class TimeForm extends Component {
  constructor(props){
    super(props);


  }

  render(){
    return (
      <div>
        <form className="time-form">
          <TimeInput name="day" min="0" max="7"/>
          <TimeInput name="hour" min="0" max="24"/>
          <TimeInput name="minute" min="0" max="60"/>
          <TimeInput name="second" min="0" max="60"/>
        </form>
      </div>
    )
  }
}

export default TimeForm;
//transform stateless
