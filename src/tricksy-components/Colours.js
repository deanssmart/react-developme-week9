import React, { Component } from 'react';

class Colours extends Component {
    constructor(props) {
        super(props);

        this.state = { index: 0};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { colours } = this.props;

        let index = this.state.index === colours.length - 1 ? 0 : this.state.index + 1;
        
        this.setState({ index: index });                  
        // can also write this as this.setState({ index }); as they have the same name                    
    }

    render() {
 
        const { index } = this.state;
        const { colours } = this.props;

        return (
            <div 
                onClick={ this.handleClick }
                style={{
                    height: 200,
                    width: 200,
                    backgroundColor: colours[index] }}>
            </div>            

        );
    }
}

export default Colours;