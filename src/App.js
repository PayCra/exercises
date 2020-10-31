import React from 'react';
import {v4 as uuidv4} from 'uuid';

let myFavoriteCultivators = ['Lan Xichen','Jin Guangyao','Nie Huaisang','Wei Wuxian','Jiang Cheng']

let myAbsoluteFavoriteCultivators = myFavoriteCultivators.map(element=><div key={uuidv4()}>{element}</div>)

function App() {
  return (
      <div>{myAbsoluteFavoriteCultivators}</div>
  );
}

export default App;