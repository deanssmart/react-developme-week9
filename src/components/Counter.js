import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = { counter: props.initial};

        this.handleClickPos = this.handleClickPos.bind(this);
        this.handleClickNeg = this.handleClickNeg.bind(this);
    }

    handleClickPos() {   
        if(this.state.counter < this.props.max){
            this.setState({ counter: this.state.counter + 1});
        }            
    }

    handleClickNeg() {
        if(this.state.counter > 0){
            this.setState({ counter: this.state.counter - 1});
        }
    }

    render() {
 
        const { counter } = this.state;

        return (
            <div className="card row">
                <p className="text-center">{ counter }</p>
                <button className="btn btn-success" onClick={ this.handleClickPos }>+</button>
                <button className="btn btn-danger" onClick={ this.handleClickNeg }>-</button>
            </div>
        );
    }
}

export default Counter;