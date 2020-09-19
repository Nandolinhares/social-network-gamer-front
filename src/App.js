import React from 'react';
import './App.css';
//Routes
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cadastrar' component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
