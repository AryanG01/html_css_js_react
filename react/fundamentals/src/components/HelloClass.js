import React, {Component} from "react";
import './HelloFunctional.css'

class HelloClass extends Component {
  render() {
    return (
      <div className="App">
        <h3>Hello from Class Component!</h3>
        <h4>Hi, I am  {this.props.name}! I am {this.props.age} years old.</h4>
      </div>
    );
  }
}

export default HelloClass;