import React from 'react';
import './App.css';
import ShadyStuff from './Components/ShadyStuff';

class App extends React.Component {

    state = {times: 0};

    handleClickCounter = () => {
        this.setState((oldState) => ({times: oldState.times + 1}));
    };

    render() {
        return (
            <div>
                <ShadyStuff name="Louis" clickCounter={this.handleClickCounter}/>
                <ShadyStuff name="Zayn" clickCounter={this.handleClickCounter}/>
                <ShadyStuff name="Harry" clickCounter={this.handleClickCounter}/>
                <ShadyStuff name="Liam" clickCounter={this.handleClickCounter}/>
                <ShadyStuff name="Niall" clickCounter={this.handleClickCounter}/>
                <div className="text">
                    <div className="in-the-middle">You clicked those {this.state.times} times.</div>
                </div>
            </div>
        );
    }
}

export default App;