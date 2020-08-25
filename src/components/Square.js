import React, { Component } from 'react';

class Square extends Component {
    constructor(props) {
        super(props);

        this.state = { clicked: false };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: !this.state.clicked});
    }

    render() {
        const { clicked } = this.state;
        const { colour } = this.props;

        return (
            <div 
                onClick={ this.handleClick }
                style={{
                    height: 200,
                    width: 200,
                    backgroundColor: clicked ? colour : Square.defaultProps.colour }}>
            </div>
        );
    }
}


Square.defaultProps = {
    colour: "green",
};

export default Square;