import React from 'react';
import './App.css';
import Hello from './Components/Hello';

function App() {
    return (
        <div className="App">
            <Hello name="Zayn"/>
            <Hello name="Harry"/>
            <Hello name="Louis"/>
            <Hello name="Liam"/>
            <span>
                <Hello/>
                <span className="Ni">Ni</span>
                <span className="a">a</span>
                <span className="ll">ll</span>
            </span>
        </div>
    );
}

export default App;