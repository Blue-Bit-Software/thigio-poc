import React from 'react';
import './App.css';
import { SendData } from './userInfoSimulation';

function App() {
  return (
    <div className="App">
      {SendData()}
    </div>
  );
}

export default App;
