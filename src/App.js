import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import route from './route';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>{route}</Switch>
      </Router>
    </div>
  );
}

export default App;
