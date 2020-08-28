import React, { Component } from 'react';
import { Button, ProgressBar } from 'react-bootstrap'

class Progress extends Component {
    constructor(props) {
        super(props);

        this.state = { loaded: 0 };

        this.handleClick = this.handleClick.bind(this);
        this.handleClickReset = this.handleClickReset.bind(this);
    }

    handleClick() {
        const { loaded } = this.state;

        this.setState({ loaded: loaded + 10 });
    }

    handleClickReset() {
        this.setState({ loaded: 0 });
    }

    render() {
        const { loaded } = this.state;

        return (
            <>
                <ProgressBar animated now={ loaded } />
                <Button
                    disabled={ loaded === 100 }
                    onClick={ this.handleClick }
                    variant="primary">
                    Progress
                </Button>
                <Button
                    onClick={ this.handleClickReset }
                    variant="danger">
                    Reset
                </Button>
            </>
        );
    }
}

export default Progress;