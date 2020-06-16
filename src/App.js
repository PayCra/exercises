import React from 'react';

function App() {

  let dogName = prompt("Propose a good dog name, please:");

  let letters = [];

  let dogNameIndex;

  let isok = [];

  for (dogNameIndex = 0; dogNameIndex <= dogName.length - 1; dogNameIndex++) {
    letters.push(dogName.charAt(dogNameIndex));
  }

  function check(value, index, array) {
    if (
        (array[index].charCodeAt(0) >= 65 && array[index].charCodeAt(0) <= 90)
        ||
        (array[index].charCodeAt(0) >= 97 && array[index].charCodeAt(0) <= 122)
    ) {
      isok.push("1");
    } else {
      isok.push("0");
    }
  }

  letters.forEach(check);

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