import React, { Component } from 'react';

class LightBox extends Component {
    constructor(props) {
        super(props);

        this.state = { on: false };

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    componentDidMount() {
        window.addEventListener("click", this.handleHide);
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.handleHide);
    }

    handleShow(e) {
        e.stopPropagation();
        this.setState({ on: true });
    }

    handleHide() {
        this.setState({ on: false });
    }

    render() {
        const { on } = this.state;
        const { src } = this.props;
        const lightBoxStyle = {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
        };

        return (
            <div style={ on ? lightBoxStyle : {} }>
                <img 
                    onClick={ this.handleShow }
                    src={ src }                
                    style={{ width: on ? "" : "25%" }}
                    alt= "mad cat">                    
                </img>
            </div>
        );
    }
}

export default LightBox;