import React from 'react';
import './App.css';

function App() {

  let Result;

  let number = Number(prompt("Answer: how many songs did Louis write for One Direction?"));

  if (number >= 1 && number < 16) {
    Result = "That's way too low.";
  } else if (number >= 16 && number < 37) {
    Result = "Too low.";
  } else if (number === 37) {
    Result =
        <span>YES!!! You win <span style={{color: "orange"}}>AN AWARD</span>: 💋!</span>;
  } else if (number > 37 && number < 61) {
    Result = "Too high.";
  } else if (number >= 61) {
    Result = "A bit too high.";
  } else {
    Result = "Are you ok?";
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