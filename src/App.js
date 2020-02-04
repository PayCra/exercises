import React from 'react';
import './App.css';
import Hello from './Components/Hello';

function App() {
    return (
        <div className="App">
            <Hello name="Zayn" mic="Zayns"/>
            <Hello name="Harry" mic="Harrys"/>
            <Hello name="Louis" mic="Louiss"/>
            <Hello name="Liam" mic ="Liams"/>
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