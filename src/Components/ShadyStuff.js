import React, {Component} from 'react';
import './ShadyStuff.css';

class ShadyStuff extends Component {

    state = {
        color: ""
    };

    handleClick = () => {
        if (this.props.clickCounter !== undefined) {
            this.props.clickCounter();
        }

        if (this.state.color === "darker") {
            this.setState({color: ""})
        } else {
            this.setState({color: "darker"});
        }
    };

    render() {

        if (this.props.name.indexOf("Niall") === -1) {
            return <div className={"ShadyBox " + this.props.name + " " + this.state.color}
                        onClick={this.handleClick}/>
        } else {
            return (
                <div onClick={this.handleClick}>
                    <div className={"ShadyFlag GreenNiall " + this.state.color}/>
                    <div className={"ShadyFlag WhiteNiall " + this.state.color}/>
                    <div className={"ShadyFlag OrangeNiall " + this.state.color}/>
                </div>
            )
        }
    };
}

export default ShadyStuff;