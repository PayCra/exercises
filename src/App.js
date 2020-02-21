import React from 'react';
import './App.css';
import Hello from './Components/Hello';

function App() {
    return (
        <div className="App">
            <div className="boys">
                <Hello name="Zayn"/>
                <Hello name="Harry"/>
                <Hello name="Niall"/>
                <Hello name="Liam"/>
                <Hello name="Louis"/>
            </div>
        </div>
    )
}

export default App;
