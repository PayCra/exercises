import React from 'react';
import './App.css';

function App() {

  let levels;
  let PrintedLevels = [];

  for (levels=1; levels<11; levels++) {
    console.log(" ".repeat(10-levels) + "/".repeat(levels) + "\\".repeat(levels));
    document.write("<div>" + "&nbsp;".repeat(10-levels)+"/".repeat(levels) + "\\".repeat(levels) + "</div>");
    PrintedLevels.push(<div>{"/".repeat(levels) + "\\".repeat(levels)}</div>);
  }

  for (levels=10; levels>0; levels--) {
    console.log(" ".repeat(10-levels) + "\\".repeat(levels) + "/".repeat(levels));
    document.write("<div>" + "&nbsp;".repeat(10-levels)+"\\".repeat(levels) + "/".repeat(levels) + "</div>");
    PrintedLevels.push(<div>{"\\".repeat(levels) + "/".repeat(levels)}</div>);
  }

  return (
      <div className="App">
        {PrintedLevels}
      </div>
  );
}

export default App;