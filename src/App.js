import React from 'react';
import './App.css';

function App() {

  let Result;

  let number = Number(prompt("Answer: how many songs did Louis write for One Direction?"));

  switch (true) {
    case number >= 1 && number < 16:
      Result = "That's way too low.";
      break;

    case number >= 16 && number < 37:
      Result = "Too low.";
      break;

    case number === 37:
      Result =
          <span>YES!!! You win <span style={{color: "orange"}}>AN AWARD</span>: 💋!</span>;
      break;

    case number > 37 && number < 61:
      Result = "Too high.";
      break;

    case number >= 61:
      Result = "A bit too high.";
      break;

    default:
      Result = "Are you ok?";
      break;
  }

  if (isNaN(number)) {
    return (
        <div className="App">
          {Result}
        </div>
    );
  } else {
    return (
        <div className="App">
          {number}? {Result}
        </div>
    );
  }
}

export default App;