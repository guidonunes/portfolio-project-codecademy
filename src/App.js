import React from 'react';
import Journal from './features/journal/Journal';
import BackgroundImage from './features/backgroundImage/BackgroundImage';
import BackgroundImageLeftControl from './features/backgroundImage/components/BackgroundImageLeftControl';
import BackgroundImageRightControl from './features/backgroundImage/components/BackgroundImageRightControl';



function App() {
  return (
  <div className="App">
    <BackgroundImage />
    <aside className="left-wallpaper-control wallpaper-control">
      <BackgroundImageLeftControl />
    </aside>
    <main>
      <Journal />
    </main>
    <aside className="right-wallpaper-control wallpaper-control">
      <BackgroundImageRightControl />
    </aside>
  </div>
  );
}


export default App;
