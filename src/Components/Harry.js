import React, {Component} from 'react';
import './Fab.css';

class Harry extends Component {

    constructor() {
        super();
        this.state = {
            fablevel: "solid fabulous",
            color: ""
        };
    }

    handleClick = () => this.setState({fablevel: "almost Lizzo's level of faboo", color: "Fab"});

    render() {
        return <span onClick={this.handleClick} className={this.state.color}>
           {this.state.fablevel}
       </span>;
    }
}

export default Harry;