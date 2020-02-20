import React from 'react';
import './App.css';

function App() {

  let levels;
  let printedLevels = [];

  for (levels=1; levels<21; levels++) {
    let spaces = (20 - levels)/2;
    console.log(' '.repeat(spaces) + 'O' + 'H'.repeat(levels) + 'O');
    printedLevels.push(<div className="App" key={levels}>O{'H'.repeat(levels)}O</div>);
  }

  return printedLevels;
}

export default App;
