import React from 'react';
import './App.css';
import WorldClock from './components/WorldClock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WorldClock text="Honolulu" gmtOffset={-10} />
      </header>
    </div>
  );
}

export default App;
