import React from 'react';
import './App.css';
import Box from './Components/Box';
import Flag from './Components/Flag';

function App() {
    return (
        <div className="App">
            <Box name="Zayn"/>
            <Box name="Harry"/>
            <Box name="Liam"/>
            <Box name="Louis"/>
            <Flag/>
        </div>
    );
}

export default App;