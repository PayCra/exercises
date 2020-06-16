import React from 'react';

function App() {

  let dogName = prompt("Propose a good dog name, please:");

  while (dogName === "") {
    dogName = prompt("Propose a good dog name, please:");
  }

  let letters = [];

  let dogNameIndex;

  for (dogNameIndex=0; dogNameIndex<=dogName.length-1;dogNameIndex++) {
    letters.push(dogName.charAt(dogNameIndex));
  }

  function check(value) {
    return (value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 90)
        ||
        (value.charCodeAt(0) >= 97 && value.charCodeAt(0) <= 122);
  }

  let result = letters.every(check);

  if (result === false) {
    document.write("Gimme big or small letters only, please.")
  } else {
    document.write(`${dogName}? Good name! Thanks.`)
  }

  return (
      <div/>
  );
}

export default App;
