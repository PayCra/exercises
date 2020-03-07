import React from 'react';
import './App.css';

function App() {

  let OneDirection = [];

  OneDirection[0] = [
    "Louis",
    "a little shit that acquired a lot of inner wisdom during his solo years",
    "Walls"
  ];

  let Niall = <span>
       <span className="Ni">Ni</span>
       <span className="a">a</span>
       <span className="ll">ll</span>
   </span>;

  OneDirection[1] = [
    Niall,
    "a courageous Irishman with zest for life",
    "Temporary Fix"
  ];

  return (
      <div className="App">
        <div className="Box">
          <div>Name: {OneDirection[0][0]}</div>
          <div>He is: {OneDirection[0][1]}</div>
          <div>Best work: {OneDirection[0][2]}</div>
        </div>

        <div className="Box">
          <div>Name: {OneDirection[1][0]}</div>
          <div>He is: {OneDirection[1][1]}</div>
          <div>Best work: {OneDirection[1][2]}</div>
        </div>
      </div>
  );
}

export default App;