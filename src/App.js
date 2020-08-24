import React from 'react';
import './App.css';

import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Square from './components/Square';
import People from './components/People';

function App() {
  return (
    <div className="App">
      <Header />
      <Paragraph />
      <Square />
      <People />
    </div>
  );
}

export default App;
