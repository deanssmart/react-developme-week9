import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class CatchMeIfYouCan extends Component {
    constructor(props) {
        super(props);

        this.state = { position: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let position = this.state.position + this.props.jump;
        this.setState({ position });
    }

    render() {
        const { position } = this.state;

        return (
            <>
                <Button
                    onClick={ this.handleClick }
                    style={{ position: "relative", top: position + "px" }}
                    variant="primary">
                    Catch Me!
                </Button>
            </>
        );
    }
}

export default CatchMeIfYouCan;