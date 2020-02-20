import React, {Component} from 'react';
import './ShadyBox.css';

class ShadyBox extends Component {

    constructor(){
        super ();
        this.state = {
            color: ""
        };
    }

    handleClick = () => {
        if (this.state.color==='darker') {
            this.setState({color: ""})
        }
        else {
            this.setState({color: "darker"});
        }
    };

    render() {
        return <div className={"ShadyBox " + this.props.name + " " + this.state.color} onClick={this.handleClick}/>
    };
}

export default ShadyBox;