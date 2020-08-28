import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export class TempConverter extends Component {
    constructor(props) {
        super(props);

        this.state = { fahrenheit: props.fahrenheit, celsius: props.celsius };

        this.handleFahrenheit = this.handleFahrenheit.bind(this);
        this.handleCelsius = this.handleCelsius.bind(this);
    }

    handleFahrenheit(e) {
        let temp = e.currentTarget.value
        this.setState({ celsius: ((temp - 32) / 1.8).toFixed(2),
                        fahrenheit: temp });
    }

    handleCelsius(e) {
        let temp = e.currentTarget.value
        this.setState({ fahrenheit: (temp * 1.8 + 32).toFixed(2),
                        celsius: temp });
    }

    render() {
        const { fahrenheit, celsius } = this.state;
        const { labelF, nameF, labelC, nameC } = this.props;

        return(
            <Form>
                <Form.Group controlId="formInput">
                    <Form.Label>{ labelF }</Form.Label>
                    <Form.Control 
                        type="number" 
                        onChange={ this.handleFahrenheit }
                        name={ nameF }
                        value={ fahrenheit } />
                    <Form.Label>{ labelC }</Form.Label>
                    <Form.Control 
                        type="number" 
                        onChange={ this.handleCelsius }
                        name={ nameC }
                        value={ celsius } />
                </Form.Group> 
            </Form>         
        );
    }
}

TempConverter.defaultProps = {
    fahrenheit: 32,
    celsius: 0
};




   