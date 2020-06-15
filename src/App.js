import React from 'react';
import './App.css';

function App() {

  let days = [1, 2, 3, 4, 5, 6, 7];
  let indexOfDays;
  let myArray = [];
  let arrayOfVerbalFeels = ["many","too many","so many"];

  for (indexOfDays in days) {
    if (days[indexOfDays]%2===1) {
      myArray.push(
          <div>{`For the ${days[indexOfDays]} day of Christmas Lou gave me ${days[indexOfDays] * 2} feels.`}</div>)
    } else {
      myArray.push(
          <div>
            {`For the ${days[indexOfDays]} day of Christmas Lou gave me ${arrayOfVerbalFeels[days[indexOfDays]/2-1]} feels.`}
          </div>
      )
    }
  }

  return (
      <div className="App">
        {myArray}
      </div>
  );
}

export default App;