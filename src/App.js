import React from 'react';
import './App.css';
import Stuff from './components/Stuff';
import Header from './tricksy-components/Header';
import Aside from './tricksy-components/Aside';
import Main from './tricksy-components/Main';
import FadeIn from './tricksy-components/FadeIn';

function App() {
  return (
    <FadeIn time ={ "500ms" }>
      <Header />
      <div className="row">
      <Aside />
      <Main />
      </div>
      <Stuff />
    </FadeIn>
  );
}

export default App;
