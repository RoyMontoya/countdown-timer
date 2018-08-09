import React, {Component} from 'react';

class TimeInput extends Component {


  render(){
    return(
      <div>
        <label>{this.props.name}</label>
        <input type="number" name={this.props.name}
          min={this.props.min}
          max={this.props.max}/>
      </div>
    )

  }

}

export default TimeInput
