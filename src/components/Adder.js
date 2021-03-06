import React, { Component } from 'react';

class Adder extends Component {
    constructor(props) {
        super(props);

        this.state = { input: "", list: [] };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    handleClick(e) {
        e.preventDefault();
        const { input, list } = this.state;

        //input has a + infront of it to coerce it from a string to a number
        if(input !== ""){     
            this.setState({ list: [...list, +input], input: "" });
        }
    }

    calculator() {
        const { list } = this.state;

        return list.reduce((sum, value) => sum + value, 0);
    }

    render() {
        const { list, input } = this.state;

        return(
            <>
                <form className="form-group mt-4">
                    <input 
                        type="number"
                        className="form-control"
                        onChange={ this.handleChange }
                        value={ input }
                    />
                    <button
                        onClick={ this.handleClick }
                        className="btn btn-primary mt-4"
                    >
                        Add
                    </button>
                </form>
                <ul className="list-group">
                    { list.map((item, i) => (
                        <li className="list-group-item" key={ i }>{ item }</li>
                    )) }
                </ul>
                <p>Total: { this.calculator() }</p>
            </>       
        );
    }
}

export default Adder;