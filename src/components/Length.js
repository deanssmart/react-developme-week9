import React, { Component } from 'react';

class Length extends Component {
    constructor(props) {
        super(props);

        this.state = { input: "" };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
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
                    className="form-control"
                />
                <p className="form-text text-muted">
                    Length: { input.length } characters
                </p>                
            </div>            
        );
    }
}

export default Length;