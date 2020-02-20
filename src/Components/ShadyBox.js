import React, {Component} from 'react';
import './ShadyBox.css';
import './ShadyFlag.css';

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
        if (this.props.name !== "Niall") {
            return <div className={"ShadyBox " + this.props.name + " " + this.state.color}
                        onClick={this.handleClick}/>
        } else {
            return <div onClick={this.handleClick}>
                <div className={"ShadyFlag " + this.props.name + " green " + this.state.color} />
                <div className={"ShadyFlag " + this.props.name + " white " + this.state.color} />
                <div className={"ShadyFlag " + this.props.name + " orange " + this.state.color} />
            </div>
        }
    };
}

export default ShadyBox;