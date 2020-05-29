import React from 'react';
import './App.css';

function App() {

  let i;
  let alphabet = [];

  for (i=65;i<=90;i++) {
    console.log(String.fromCharCode(i));
    document.write(String.fromCharCode(i));
    alphabet.push(<span>{String.fromCharCode(i)}</span>)
  }

  return (
      <div className="App">
        {alphabet}
      </div>
  );
}

export default App;
