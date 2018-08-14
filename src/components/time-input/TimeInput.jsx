import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import miliUtil from '../../utilities/MilisecondsUtil'
import {updateUnit} from '../../reducers/timeReducer'
import './Style.css'

class TimeInput extends Component {
  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const {name} = this.props;
    const {value} = e.target;
    this.props.updateUnit({name, value})
  }

  render(){
    return(
      <div>
        <label className="input-element">{this.props.name}</label>
        <input onChange={this.handleChange} type="number" name={this.props.name}
          min={this.props.min}
          max={this.props.max}/>
      </div>
    )
  }
}

TimeInput.propTypes = {
  handle: PropTypes.func,
  name: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string
};

export default connect(null,
{updateUnit})
(TimeInput);
