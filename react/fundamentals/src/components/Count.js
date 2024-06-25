import React, { Component } from 'react'

export class Count extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

  render() {
    return (
      <div>
        <h1>Count Component</h1>
        <div>
            <button onClick={()=>this.setState({count: this.state.count - 1})}>Decrement</button>
            Count: {this.state.count}
            <button onClick={()=>this.setState({count: this.state.count + 1})}>Increment</button>
        </div>
      </div>
    )
  }
}

export default Count
