import React, { Component } from 'react';

class ToggleText extends Component {
    constructor(props) {
        super(props);

        this.state = { toggle: false};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ toggle: !this.state.toggle})
    }

    render() {
        const { toggle } = this.state;
        let text = toggle ? this.props.alternate : this.props.initial;

        return (
            <div className="card">
                <p className="text-center">{ text }</p>
                <button className="btn btn-success"  onClick={ this.handleClick }>Click me!</button>
            </div>
        );
    }
}

export default ToggleText;