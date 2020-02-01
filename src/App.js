import React from 'react';
import './App.css';
import Hello from './Components/Hello';

function App() {
    return (
        <body className="Background">
        <div className="App">
            <Hello name="Harry"/>
            <Hello name="Liam"/>
            <Hello name="Zayn"/>
            <Hello name="Louis"/>
            <div><Hello/><span className="Ni">Ni</span><span className="a">a</span><span className="ll">ll</span></div>
        </div>
        </body>
    );
}

export default App;