import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Stuff from './components/Stuff';
import Header from './tricksy-components/Header';
import Aside from './tricksy-components/Aside';
import Main from './tricksy-components/Main';
import FadeIn from './tricksy-components/FadeIn';
import Footer from './components/Footer';
import FourOhFour from './components/FourOhFour';

const App = () => (
  <Router>
    <FadeIn time ={ "500ms" }>
      <Switch>
        <Route exact path='/my-app'>
          <Header />
          <div className="row">
          <Aside />
          <Main />
          </div>
        </Route>
        <Route path="/">
          <Stuff />
        </Route>
        <FourOhFour />
      </Switch>
      <Footer />
    </FadeIn>
  </Router>
);

export default App;


