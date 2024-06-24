import React, {Component} from "react";

class Welcome extends Component {

    constructor(props) {
        super(); //calling the super class constructor

        //Data in the state is mutable and can be modified
        this.state = { name: props.name, age: props.age};
    }
    
    changeData() {
        this.setState({
            name: "Ayush", 
            age: 99
        });
    }

    render() {
        return (
            <div>
                <h2>Name is {this.state.name}.</h2>
                <h3>Age is {this.state.age}.</h3>
                <button onClick={() => this.changeData()}>Update Details</button>
            </div>
        );
    }
}

export default Welcome;