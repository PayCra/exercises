import React from 'react';

let myFavoriteCultivators = ['Lan Xichen','Jin Guangyao','Nie Huaisang','Wei Wuxian','Jiang Cheng']

let myAbsoluteFavoriteCultivators = myFavoriteCultivators.map((element, index)=><div key={"cultivator" + index}>{element}</div>)

function App() {
  return (
      <div>{myAbsoluteFavoriteCultivators}</div>
  );
}

export default App;