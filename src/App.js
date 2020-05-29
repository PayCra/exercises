import React from 'react';
import './App.css';
import ShadyBox from './Components/ShadyBox';

class App extends React.Component {

    state = {times: 0};

    handleClickCounter = () => {
        this.setState((oldState) => ({times: oldState.times + 1}));
    };

    // handleClickCounter = () => {
    //     this.setState({times: this.state.times + 1});
    // };
    //this also works, but could cause problems if someone clicked quick enough.

    render() {
        return (
            <div className="App">
                <ShadyBox name="Louis" clickCounter={this.handleClickCounter}/>
                <ShadyBox name="Zayn" clickCounter={this.handleClickCounter}/>
                <ShadyBox name="Harry" clickCounter={this.handleClickCounter}/>
                <ShadyBox name="Liam" clickCounter={this.handleClickCounter}/>
                <ShadyBox name="Niall" clickCounter={this.handleClickCounter}/>
                <div className="text">You clicked those {this.state.times} times.</div>
            </div>
        );
    }
}

export default App;