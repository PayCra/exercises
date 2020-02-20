import React from 'react';
import './App.css';
import ShadyBox from './Components/ShadyBox';

function App() {
    return (
        <div className="App">
            <ShadyBox name="Louis"/>
            <ShadyBox name="Zayn"/>
            <ShadyBox name="Harry"/>
            <ShadyBox name="Liam"/>
            <ShadyBox name="Niall"/>
        </div>
    );
}

export default App;