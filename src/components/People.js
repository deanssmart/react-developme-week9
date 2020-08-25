import React, { Component } from 'react';

class People extends Component {
    
    handleClick() {
        console.log("Hello, world");
    }

    render() {
        const { names } = this.props;

        return (
            names ? (
                <ul className="list-group" onClick={ this.handleClick }>
                    { names.map((name, i) => (
                        <li className="list-group-item" key={ i }>{ name }</li>
                    )) }
                </ul>
            ) : <p>Nothing to see here</p>
        );        
    }
}


export default People;



