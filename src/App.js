import React, {Component} from 'react';
import './App.css';
import Button from './Components/Button';
import Circle from './Components/Circle';

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
          <Button handleClick={this.handleClick} />
          {/*The above is an example of a child passing info to the parent*/}
          <Circle color={this.state.color} />
          {/*The above is an example of a child getting info from the parent*/}
        </div>
    );
  }
}

export default App;