import React from 'react';
import './App.css';

function App() {

  let textToGoThrough = prompt("Give me the text to search through:");

  let textToFind = prompt("Give me the phrase you want to count:");

  let foundAtPosition = 0;

  let count = 0;

  while (foundAtPosition !== -1) {
    foundAtPosition = textToGoThrough.indexOf(textToFind,foundAtPosition);
    if (foundAtPosition !== -1) {
      count++;
      foundAtPosition++;
    }
  }

  return (
      <div className="App">
        You wrote: "{textToGoThrough}"
        {<br/>}
        The number of times "{textToFind}" appears in this text is: {count}.
      </div>
  );
}

export default App;
