import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Square from './components/Square';

function App() {
  return (
    <div className="App">
      <Header />
      <Paragraph />
      <Square />
    </div>
  );
}

export default App;
