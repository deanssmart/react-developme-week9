import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = { list: [], input: "" };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    handleClick() {
        const { list, input } = this.state;
        this.setState({ list: [...list, input]});

    }

    render() {
        const { list, input } = this.state;

        return(
            <>
                <input 
                    onChange={ this.handleChange }
                    value={ input }
                    className="form-control" 
                    />
                <button 
                    onClick={ this.handleClick }
                    className="btn btn-success"
                    >
                    Add
                </button>
                <ul>
                    { list.map((item, i) => (
                        <li className="list-group-item" key={ i }>{ item }</li>
                    )) }
                </ul>
            </>
        );
    }
}

export default List;

