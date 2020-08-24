import React from 'react';
import './App.css';
import Stuff from './components/Stuff';
import Header from './tricksy-components/Header';
import Aside from './tricksy-components/Aside';
import Main from './tricksy-components/Main';

function App() {
  return (
    <>
      <Header />
      <div className="row">
      <Aside />
      <Main />
      </div>
      <Stuff />
    </>
  );
}

export default App;
