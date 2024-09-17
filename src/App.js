import React, { useState } from 'react';
import Journal from './features/journal/Journal';
import BackgroundImage from './features/backgroundImage/BackgroundImage';

import BackgroundImageLeftControl from './features/backgroundImage/components/BackgroundImageLeftControl';
import BackgroundImageRightControl from './features/backgroundImage/components/BackgroundImageRightControl';

function App() {
  const [controlsVisible, setControlsVisible] = useState(false);

  const handleScreenClick = () => {
    // Toggle visibility on click
    setControlsVisible(true);
    // Automatically hide after a delay
    setTimeout(() => setControlsVisible(false), 3000); // e.g., hide after 3 seconds
  };

  return (
    <div className="App" onClick={handleScreenClick}>

      <BackgroundImage />

      {controlsVisible && (
        <>
          <aside className=" wallpaper-control">
            <BackgroundImageLeftControl />
          </aside>
          <aside className="wallpaper-control">
            <BackgroundImageRightControl />
          </aside>
        </>
      )}
      <main>
        <Journal />
      </main>
    </div>
  );
}

export default App;
