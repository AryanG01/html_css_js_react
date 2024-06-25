import React, { Component } from "react";

class Welcome extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            age: props.age,
            newName: "",
            newAge: ""
        }
    }

    setName(event) {
        this.setState({ newName: event.target.value})
    }

    setAge(event) {
        this.setState({ newAge: event.target.value})
    }

    changeData() {
        this.setState({
            name: this.state.newName || this.state.name,
            age: this.state.newAge || this.state.age,
            newName: "",
            newAge: ""
        });
    }

    render() {
        return (
            <div>
                <h2>Name is {this.state.name}.</h2>
                <h3>Age is {this.state.age}.</h3>
                <input 
                    type='text'
                    value = {this.state.newName}
                    onChange = {(event) => this.setName(event)}
                    placeholder = "Enter your name"
                />
                <input 
                    type='number'
                    min = '0'
                    value = {this.state.newAge}
                    onChange = {(event) => this.setAge(event)}
                    placeholder = "Enter your age"
                />
                <button onClick = {() => this.changeData()}>Update Details</button>
            </div>
        )
    }
}

export default Welcome;