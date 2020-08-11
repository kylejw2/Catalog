import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import MyNav from './components/myNav';
import Glossary from './components/glossary';


function App() {
  return (
    <Router>
      <MyNav />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route>
          <Glossary path='/glossary/' />
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
