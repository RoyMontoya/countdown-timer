import React, {Component} from 'react';
import PropTypes from 'prop-types';
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

TimeBox.propTypes = {
  value: PropTypes.number,
  text: PropTypes.string
};

export default TimeBox;
