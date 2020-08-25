import React, { Component } from 'react';

class Die extends Component {
    constructor(props) {
        super(props);

        this.state = { number: 1}

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { sides } = this.props;

        let random = Math.random();
        let number = Math.floor(random * sides + 1);
        this.setState({ number: number });

    }

    render() {
        const { number } = this.state;

        return (
            <div
                onClick={ this.handleClick }
                className="card"
                style={{
                    height: 200,
                    width: 200,
                    borderRadius: 50,
                }}>
                    <h2 className="text-center my-auto jumbo">{ number }</h2>
                </div>
        );
    }
}

export default Die;