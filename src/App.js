import React from 'react';
import './App.css';
import firebaseInitialize from './firebase/config';
//Routes
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//AuthProvider
import AuthProvider from './components/AuthProvider';

//Pages
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cadastrar' component={Signup} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
