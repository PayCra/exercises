import React from 'react';
import './App.css';

function App() {

  let OneDirection = [];

  OneDirection[0] = [];
  OneDirection[0][0] = "Louis Tomlinson";
  OneDirection[0][1] = "blue";
  OneDirection[0][2] = "very smart, little shit.";
  OneDirection[0][3] = "talks about class struggles and losing family members. Best lyrics.";
  OneDirection[0][4] = "\"I'm just like you; if you only knew\".";

  OneDirection[1] = [];
  OneDirection[1][0] = "Niall Horan";
  OneDirection[1][1] = "green, white and orange";
  OneDirection[1][2] = "laughs a lot, is fearless.";
  OneDirection[1][3] = "heart-throb with a guitar.";
  OneDirection[1][4] = "\"I'll be your temporary fix; you control me, even if it's just tonight\".";

  return (
      <div className="App">
        <div>
          <div>Guide to One Direction:</div>
          <div>Name: <span className="Louis">{OneDirection[0][0]}</span></div>
          <div>Mic color: {OneDirection[0][1]}</div>
          <div>In One Direction, he was the: {OneDirection[0][2]}</div>
          <div>Now that he's solo: {OneDirection[0][3]}</div>
          <div>Ah, a lyric: {OneDirection[0][4]}</div>
        </div>
        <div>
          <div>Guide to One Direction:</div>
          <div>Name: <span className="Niall">{OneDirection[1][0]}</span></div>
          <div>Mic color: {OneDirection[1][1]}</div>
          <div>In One Direction, he was the: {OneDirection[1][2]}</div>
          <div>Now that he's solo: {OneDirection[1][3]}</div>
          <div>Ah, a lyric: {OneDirection[1][4]}</div>
        </div>
      </div>
  );
}

export default App;