import React from 'react';
import './App.css';
import firebaseInitialize from './firebase/config';
//Routes
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

//AuthProvider
import AuthProvider from './components/AuthProvider';
//AuthRoutes
import NormalRoute from './components/AuthRoutes/NormalRoute';
import ConnectedRoute from './components/AuthRoutes/ConnectedRoute';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

//Pages
import Home from './pages/Home';
import Signup from './pages/Signup';

const token = localStorage.getItem('FBIdToken');

var authenticated = false;

if(token) {
  const decodedToken = jwtDecode(token);
  if(decodedToken * 1000 < Date.now()) {
    authenticated = false;
  } else {
    authenticated = true;
  }
}

function App() {
  return (
    <div>
      <Provider store={store}>
        <AuthProvider>
          <Router>
            <Switch>
              <ConnectedRoute exact path='/' authenticated={authenticated} component={Home} />
              <NormalRoute exact path='/cadastrar' authenticated={authenticated} component={Signup} />
            </Switch>
          </Router>
        </AuthProvider>
      </Provider>
    </div>
  );
}

export default App;
