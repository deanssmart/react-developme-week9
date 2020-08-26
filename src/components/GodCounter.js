import React, { Component } from 'react';

class GodCounter extends Component {
    constructor(props) {
        super(props);

        this.state = { counter: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener("click", this.handleClick);
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.handleClick);
    }

    handleClick() {
        this.setState({ counter: this.state.counter + 1});
    }

    render() {

        const { counter } = this.state;

        return (
            <div className="card row">
                <h2 className="text-center">{ counter }</h2>
            </div>
        );
    }
}


export default GodCounter;