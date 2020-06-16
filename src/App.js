import React from 'react';

function App() {

  let OneDirection = ["Liam", "Louis", "Harry", "Zayn"];
  OneDirection.push("Niall");

  let CuteOneDirection = OneDirection.map(guy => "cute " + guy);

  let PeopletoPrint = [];

  for (let cutePeopleIndex in OneDirection) {
    PeopletoPrint.push(" " + CuteOneDirection[cutePeopleIndex] + ", ")
  }

  return (
      <div>
        <div>People that are cute put in an array and invoked just straight up: {OneDirection}</div>
        <div>People that are cute put in an array converted into a string by React: {OneDirection + ""}</div>
        <div> People that are cute put in an array and invoked with
          appropriate breaks between them thanks to the join function:
          &nbsp;{OneDirection.join(", ")}</div>
        <div>People that are cute in an array with cuteness added thanks to the map function:
          {CuteOneDirection.map((guy) =>
              <span key={guy}> {guy}, </span>)}</div>
        <div>Done with map function recreated with for-let-in: {PeopletoPrint}</div>
      </div>
  );
}

export default App;
