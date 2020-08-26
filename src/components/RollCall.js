import React, { Component } from 'react';

class RollCall extends Component {
    constructor(props) {
        super(props);

        this.state = { position: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { names } = this.props;

        let position = this.state.position === names.length - 1 ? 0 : this.state.position + 1;
        
        this.setState({ position: position });          
    }

    render() { 
        const { position } = this.state;
        const { names } = this.props;

        return (
            <div className="card row">
                <p className="text-center">{ names[position] }</p>
                <button 
                    className="btn btn-success"
                    onClick={ this.handleClick }>
                    Next
                </button>
            </div>
        );
    }
}

export default RollCall;