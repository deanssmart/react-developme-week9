import React, { Component } from 'react';

class TempConverter extends Component {
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
            <div className="form-group">
                <label className="lead">{ labelF }</label>
                <input
                    type="number" 
                    onChange={ this.handleFahrenheit }
                    name={ nameF }
                    value={ fahrenheit }
                    className="form-control"
                />
                <label className="lead">{ labelC }</label>
                <input 
                    type="number"
                    onChange={ this.handleCelsius }
                    name={ nameC }
                    value={ celsius }
                    className="form-control"
                />    
            </div>            
        );
    }
}

TempConverter.defaultProps = {
    fahrenheit: 32,
    celsius: 0
};

export default TempConverter;