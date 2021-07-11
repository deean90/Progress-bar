import React, { useEffect, useState } from 'react'
import './App.css';

import ProgressBar from './components/ProgressBar';

const App = () => {

  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState('');

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setProgress(100);
      setColor('#dddddd');
    }, 850);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <ProgressBar
          progress={progress}
          size={200}
          strokeWidth={2}
          strokeColor={color}
        />
      </div>
    </div>
  );
}

export default App;
