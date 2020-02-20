import React, {Component} from 'react';
import './Box.css';
import handleClick from './myclick';

class Box extends Component {

    constructor() {
        super();
        this.state = {
            color: ""
        };
    }

    render() {
        return <div
            className={"Box " + this.props.name + " " + this.state.color}
            onClick={handleClick.bind(this)}/>
    }
}

export default Box;