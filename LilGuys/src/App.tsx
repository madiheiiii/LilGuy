import { useState } from 'react';
import './App.css'

function App() {
  const [isVisible,setVisbile] = useState(true);
  function sendGuy() {
    setVisbile(false);
  }
  return (
      <div className="w-180 h-120"> 
        <h1>
          Hello LilGuys!
        </h1>
          <button type="button" onClick={sendGuy} className={`bg-blue-300 active:bg-blue-200 ${isVisible ? 'visible' : 'invisible'}`}>
            Send out the lil guys!
          </button>
        </div>

  );
}

export default App
