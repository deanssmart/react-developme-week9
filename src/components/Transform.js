import React, { Component } from 'react';

class Transform extends Component {
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
        const { transform } = this.props;

        return(
            <>
                <input 
                    type="number"
                    className="form-control"
                    onChange={ this.handleChange }
                    value={ input }
                    placeholder="Input value of x"

                />
                <p className="card card-body">{ transform.toString() } = { transform(+input) }</p>
            </>       
        );
    }
}

export default Transform;