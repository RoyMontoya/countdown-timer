import React, {Component} from 'react';
import './Style.css'

class TimeBox extends Component{

  render(){
    return(
      <div className="time-box">
        <div className="values-container">
          <div className="time-value">{(this.props.value) ? this.props.value : 0}</div>
          <div className="time-text">{this.props.text}</div>
        </div>
      </div>
    )
  }
}

export default TimeBox;
