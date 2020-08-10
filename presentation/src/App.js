import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';


function App() {
  return (
    <Router>
      <Route>
        <Home />
      </Route>
    </Router>
  );
}

export default App;
