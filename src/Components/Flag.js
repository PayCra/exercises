import React, {Component} from 'react';
import './Flag.css';
import handleClick from './myclick';

class Flag extends Component {

    constructor() {
        super();
        this.state = {
            color: ""
        };
    }

    render() {
        return (<div onClick={handleClick.bind(this)}>
                <div className={"Flag GreenPart " + this.state.color}/>
                <div className={"Flag WhitePart " + this.state.color}/>
                <div className={"Flag OrangePart " + this.state.color}/>
            </div>
        )
    }
}

export default Flag;