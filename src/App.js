import React from 'react';
import './App.css';
import firebaseInitialize from './firebase/config';
//Routes
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//AuthProvider
import AuthProvider from './components/AuthProvider';

//Routes
import Routes from './Routes';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <AuthProvider>
          <Router>
            <Switch>
              <Routes />
            </Switch>
          </Router>
        </AuthProvider>
      </Provider>
    </div>
  );
}

export default App;
