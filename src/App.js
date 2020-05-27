import React from 'react';
import './App.css';

function App() {

  let Text;

  let number = Number(prompt("Answer: how many nipples does Harry Styles have?"));

  switch (number) {
    case 1:
    case 2:
    case 3:
      Text = "Too little!";
      break;

    case 4:
      Text = "Yes!";
      break;

    default:
      Text = "You crazy.";
  }

  return (
      <div className="App">
        {Text}
      </div>
  );
}

export default App;