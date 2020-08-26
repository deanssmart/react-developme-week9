import React, { Component } from 'react';

class LameGame extends Component {
    constructor(props) {
        super(props);
    
        this.state = { 
                        playing: false,
                        start: 0,
                        stop: 0, 
                    };

        this.handleClickStart = this.handleClickStart.bind(this);
        this.handleClickStop = this.handleClickStop.bind(this);
    }

    handleClickStart() {
        this.setState({ playing: true, start: Date.now() });
    }

    handleClickStop() {
        this.setState({ playing: false, stop: Date.now() })
    }

    render() {
        const { playing } = this.state;
        const { start } = this.state;
        const { stop } = this.state;
        const { aim } = this.props;

        let time = (stop - start)/1000; 

        return (
            <div>
                <p style={{ visibility: playing ? 'hidden' : 'visible' }}>{ time }</p>
                <button 
                    style={{ display: playing ? 'none' : 'block' }}
                    className="btn btn-success"  
                    onClick={ this.handleClickStart }>
                        Start
                </button>
                <button 
                    style={{ display: playing ? 'block' : 'none' }}
                    className="btn btn-success"
                    onClick={ this.handleClickStop }>Now</button>
            </div>
        );
    }
}

export default LameGame;