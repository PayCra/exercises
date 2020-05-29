import React, {Component} from 'react';
import './App.css';
import Crown from './Components/Crown';

class App extends Component {

  state = {
    color: ""
  };

  handleClick = () => {
    if (this.state.color==="") {
      this.setState({color: "bluer"})
    } else {
      this.setState({color: ""})
    }
  };

  render() {
    return (
        <div className="App">
          <div className="onhead">
            <Crown/>
            <div className="Button" onClick={this.handleClick}>Click me</div>
          </div>
          <div className={"Circle " + this.state.color}>I am a pretty circle</div>
        </div>
    );
  }
}

export default App;