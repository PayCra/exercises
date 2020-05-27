import React, {Component} from 'react';
import './Harry.css';

class Harry extends Component {

        state = {
            color: "",
            fablevel: "pretty fabulous"
        };

    handleClick = () => {
        if (this.state.color === "darker") {
            this.setState({color: "", fablevel: "pretty fabulous"})
        } else {
            this.setState({color: "darker", fablevel: "almost Lizzo's level of fabboo"})
        }
    };

    render() {
        return <span className={"Pinkish " + this.state.color} onClick={this.handleClick}>{this.state.fablevel}.</span>
    }
}

export default Harry;