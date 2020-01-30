import React, {Component} from 'react';
import HaveKids from './HaveKids';
import Sammich from './Sammich';
import './Pinks.css';

class Hello extends Component {
    render() {
        return <div> <span className="OnePink">Hello, One Direction.</span><span><HaveKids/> <Sammich/></span> </div>;
    }
}

export default Hello;