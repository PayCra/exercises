import React from 'react';

function App() {

  let dogName = prompt("Propose a good dog name, please:");

  let letters = [];

  let dogNameIndex;

  let isok = [];

  for (dogNameIndex=0; dogNameIndex < dogName.length; dogNameIndex++) {
    letters.push(dogName.charAt(dogNameIndex));
    if (
        (letters[dogNameIndex].charCodeAt(0) >= 65 && letters[dogNameIndex].charCodeAt(0) <=90)
        ||
        (letters[dogNameIndex].charCodeAt(0) >= 97 && letters[dogNameIndex].charCodeAt(0) <=122)
    )
    {
      isok.push("1")
    } else {
      isok.push("0")
    }
  }

  if (isok.indexOf("0") !== -1) {
    document.write("Gimme big or small letters only, please.")
  } else {
    document.write(`${dogName}? Good name! Thanks.`)
  }

  return (
      <div/>
  );
}

export default App;
