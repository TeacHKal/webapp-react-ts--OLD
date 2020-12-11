import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ChatAppScreen} from "./screens/chatAppScreen";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <ChatAppScreen/>
      </header>
    </div>
  );
}

export default App;
