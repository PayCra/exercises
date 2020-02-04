import React, {Component} from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        return <span>
            <span className="Pink">Hello, </span>
            <span className={this.props.name}>{this.props.name}</span>
      </span>;
    }
}

export default Hello;