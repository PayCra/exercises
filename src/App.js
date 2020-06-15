import React from 'react';

function App() {

  function myTimesTable(mynumber,start,end) {
    let loopCounter = start;
    for (loopCounter;loopCounter<=end;loopCounter++) {
      document.write(` ${mynumber} * ${loopCounter} = ${mynumber*loopCounter} <br>`)
    }
  }

  let usersWishes = prompt("Gimme a number that's not -1 to see some times tables:");

  while (isNaN(usersWishes) || usersWishes === " " || usersWishes === "") {
    usersWishes = prompt("That was not a number, dude. Gimme something to work with:");
  }

  myTimesTable(usersWishes,7,10);

  return (
      <div/>
  );
}

export default App;