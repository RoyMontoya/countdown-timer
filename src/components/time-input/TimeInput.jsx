import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Style.css'

class TimeInput extends Component {
  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.handle(this.props.name, e.target.value)
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
  name: PropTypes.string,
  handle: PropTypes.func,
  name: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string
};

export default TimeInput
