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

    handleClick(e) { 
        e.preventDefault();       
        const { list, input } = this.state;

        if(input !== ""){        
            this.setState({ list: [...list, input], input: ""});
        }
    }

    render() {
        const { list, input } = this.state;

        return(
            <>
                <form className="form-group mt-4">
                    <input 
                        type="text"
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
            </>     
        );
    }
}

export default List;

