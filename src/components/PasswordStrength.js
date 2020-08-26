import React, { Component } from 'react';

class PasswordStrength extends Component {
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
        const { label, name } = this.props;

        return(
            <div className="form-group">
                <label className="lead">{ label }</label>
                <input 
                    onChange={ this.handleChange }
                    name={ name }
                    value={ input }
                    type="password"
                    className="form-control"
                    style={{ backgroundColor: this.calculateColour() }}
                />
            </div>            
        );
    }
}

export default PasswordStrength;