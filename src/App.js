import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import route from './route';
import MenuButtons from './components/MenuBtns';

function App() {
  return (
    <div className="App">
      <Router>
        <MenuButtons />
        {/* {route} */}
        <Switch>{route}</Switch>
      </Router>
    </div>
  );
}

export default App;
