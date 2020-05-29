import React, {Component} from 'react';
import './MostlyBoxes.css';

let Nialls = ["Orange","White","Green"];

class MostlyBoxes extends Component {

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

        if (this.props.name.indexOf("Niall") === -1 ) {
            return <div className={"Box " + this.props.name + " " + this.state.color}
                        onClick={this.handleClick}/>
        } else {
            return (
                <div onClick={this.handleClick}>
                    {Nialls.map
                    (colorofniall =>
                        <div className={"Flag " + colorofniall + " " + this.state.color}/>
                    )
                    }
                </div>
            )
        }
    };
}

export default MostlyBoxes;