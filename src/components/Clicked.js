import React, { Component } from 'react';

class Clicked extends Component {
    constructor(props) {
        super(props);

        this.state = { clicked: false };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: true });
    }

    render() {
        const { clicked } = this.state;

        return (
            <p onClick={ this.handleClick }>
                { clicked ? "Clicked" : "Not Clicked"}
            </p>
        );
    }
}

export default Clicked;