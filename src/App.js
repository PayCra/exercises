import React from 'react';
import './App.css';
import MostlyBoxes from './Components/MostlyBoxes';

class App extends React.Component {

    state = {times: 0};

    handleClickCounter = () => {
        this.setState((oldState) => ({times: oldState.times + 1}));
    };

    render() {
        return (
            <div className="organization">
                <div className="lineup">
                    <MostlyBoxes name="Louis" clickCounter={this.handleClickCounter}/>
                    <MostlyBoxes name="Zayn" clickCounter={this.handleClickCounter}/>
                    <MostlyBoxes name="Harry" clickCounter={this.handleClickCounter}/>
                    <MostlyBoxes name="Liam" clickCounter={this.handleClickCounter}/>
                    <MostlyBoxes name="Niall" clickCounter={this.handleClickCounter}/>
                </div>
                <div className="text">
                    <div className="in-the-middle">You clicked those {this.state.times} times.</div>
                </div>
            </div>
        );
    }
}

export default App;