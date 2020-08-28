import React, { Component } from 'react';

class CatchMeIfYouCan extends Component {
    constructor(props) {
        super(props);

        this.state = { position: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let position = this.state.position + this.props.jump;
        this.setState({ position: position });
    }

    render() {

        return (
            <>
                <button 
                    className="btn btn-primary"
                    onClick={ this.handleClick }
                    style={{ position: "relative", top: this.state.position + "px" }}>
                    Click Me!
                </button>
            </>
        );
    }
}

export default CatchMeIfYouCan;