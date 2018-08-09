import React, {Component} from 'react';
import './Style.css'

class TimeInput extends Component {
  constructor(props){
    super(props)

    // this.state = { value: 0}

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    // this.setState({value: e.target.value})
    this.props.handle(this.props.name, e.target.value)
  }

  render(){
    return(
      <div>
        <label className="input-element">{this.props.name}</label>
        <input onChange={this.handleChange} type="number" name={this.props.name}
          // value = {this.state.value}
          min={this.props.min}
          max={this.props.max}/>
      </div>
    )
  }

}

export default TimeInput
