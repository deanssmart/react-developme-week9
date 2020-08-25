import React, { Component } from 'react';

class Paragraph extends Component {
    render() {
        const { children } = this.props;

        return (
            <p>{children ? children : "Hello, World"}</p>
        );
    }
}

export default Paragraph;