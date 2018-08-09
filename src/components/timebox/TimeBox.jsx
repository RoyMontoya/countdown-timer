import React, {Component} from 'react';
import './TimeBox.css'

class TimeBox extends Component{

  render(){
    return(
      <div className="time-box">
        <div className="values-container">
          <div className="time-value">1</div>
          <div className="time-text">{this.props.text}</div>
        </div>
      </div>
    )
  }
}

export default TimeBox;
