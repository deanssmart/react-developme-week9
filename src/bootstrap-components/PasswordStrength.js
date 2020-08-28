import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export class PasswordStrength extends Component {
    constructor(props) {
        super(props);

        this.state = { input: "" };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    calculateColour() {
        let length = this.state.input.length;

        if(length === 0){
            return "";
        } else if(length < 9){
            return "red";
        } else if(length < 16){
            return "orange";
        } else {
            return "green";
        }
    }

    render() {
        const { input } = this.state;

        return(
            <>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        value={ input }
                        type="password"
                        placeholder="Password"
                        onChange={ this.handleChange }
                        style={{ backgroundColor: this.calculateColour() }} />
                </Form.Group>
            </>
        );
    }
}
