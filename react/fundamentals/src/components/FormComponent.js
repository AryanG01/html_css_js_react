import React, { Component } from 'react'

export class FormComponent extends Component {

    constructor(props) {
        console.log("Constructor called")
        super(props)

        this.state = {
            email: '',
            query: '',
            timeToReach: 'morning',
        }
    }

    onChangeEmail = (event) => {
        // gives the data entered intp the input box
        this.setState({
            email: event.target.value
        })
    }

    onChangeQuery = (event) => {
        // gives the data entered intp the input box
        this.setState({
            query: event.target.value
        })
    }

    onChangeTimeToReach = (event) => {
        // gives the data entered intp the input box
        this.setState({
            timeToReach: event.target.value
        })
    }

    onSubmitQuery = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        console.log(`Email: ${this.state.email} Query: ${this.state.query} TTR: ${this.state.timeToReach}`);
    }

    //will be called afetr constructor and all the elements of the DOM have been loaded
    componentDidMount() {
        //onload API call
        console.log("FormComponent mounted");
        this.setState({
            timeToReach: 'evening'
        });
    }

    render() {
        return (
        <div>
            Enquiry Form<br />
            <form onSubmit={this.onSubmitQuery}>
                <div>
                    <label>Email:</label>
                    <input type="email" 
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea value={this.query} onChange={this.onChangeQuery}></textarea>
                </div>
                <div>
                    <label>Preferred time to reach</label>
                    <select value={this.timeToReach} onChange={this.onChangeTimeToReach}>
                        <option value='morning'>Morning</option>
                        <option value='afternoon'>Afternoon</option>
                        <option value='evening'>Evening</option>
                    </select>
                </div>
                <button type="submit">Send Enquiry</button>
            </form>
        </div>
        )
    }
}

export default FormComponent
