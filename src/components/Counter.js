import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = { counter: this.props.initial};

        this.handleClickPos = this.handleClickPos.bind(this);
        this.handleClickNeg = this.handleClickNeg.bind(this);
    }

    handleClickPos() {
        if(this.state.counter < this.props.max){
            let counter = this.state.counter + 1;
            this.setState({ counter: counter});
        }            
    }

    handleClickNeg() {
        if(this.state.counter > 0){
            let counter = this.state.counter - 1;
            this.setState({ counter: counter});
        }
    }

    render() {
 
        const { counter } = this.state;

        return (
            <div className="card row">
                <p className="text-center">{ counter }</p>
                <button className="btn btn-success"  onClick={ this.handleClickPos }>+</button>
                <button className="btn btn-danger"  onClick={ this.handleClickNeg }>-</button>
            </div>
        );
    }
}

export default Counter;