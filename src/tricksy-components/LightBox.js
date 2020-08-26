import React, { Component } from 'react';

class LightBox extends Component {
    constructor(props) {
        super(props);

        this.state = { clicked: false };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate() {
        const { clicked } = this.state;

        if(clicked === true){
            window.addEventListener("click", this.handleClick);
        }
    }

    handleClick() {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        const { clicked } = this.state;
        const { src } = this.props;

        return (
            <>
                <img 
                    onClick={ this.handleClick }
                    src={ src }                
                    style={{ width: clicked ? "100%" : "20%" }}>
                </img>
            </>
        );
    }
}

export default LightBox;