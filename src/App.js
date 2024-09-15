import React from 'react';
import Journal from './features/journal/Journal';
import BackgroundImage from './features/backgroundImage/BackgroundImage';


function App() {
  return (
  <div className="App">
    <BackgroundImage />
    <main>
      <Journal />
    </main>
  </div>
  );
}


export default App;
