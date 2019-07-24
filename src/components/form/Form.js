import React, { Component } from "react";

class Form extends Component {

    state = {
        firstname: "",
        email: ""
    }

    handelChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <p>firstname : {this.state.firstname}</p>
                <p><input name="firstname" type="text" onChange={this.handelChange}/></p>

                <p>email : {this.state.email}</p>
                <p><input name="email" type="email" onChange={this.handelChange} /></p>
            </div>
        );
    }
}

export default Form;

