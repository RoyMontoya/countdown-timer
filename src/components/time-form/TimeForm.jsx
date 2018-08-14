import React from 'react';
import TimeInput from '../time-input/TimeInput'
import './Style.css'

const TimeForm = () => (
    <div>
      <form className="time-form">
        <TimeInput name="day" min="0" max="7"/>
        <TimeInput name="hour" min="0" max="24"/>
        <TimeInput name="minute" min="0" max="60"/>
        <TimeInput name="second" min="0" max="60"/>
      </form>
    </div>
  )

export default TimeForm;
