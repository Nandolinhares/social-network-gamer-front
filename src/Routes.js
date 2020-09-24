import React, { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
//AuthRoutes
import NormalRoute from './components/AuthRoutes/NormalRoute';
import ConnectedRoute from './components/AuthRoutes/ConnectedRoute';
//Redux
import { useSelector } from 'react-redux';

//Pages
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

export default function Routes() {

    //Authenticated
    const { authenticated } = useSelector(state => state.user);

    const token = localStorage.getItem('FBIdToken');

    var Authenticated = false;

    if(token) {
        const decodedToken = jwtDecode(token);
        if(decodedToken * 1000 < Date.now()) {
            Authenticated = false;
        } else {
            Authenticated = true;
        }
    }

    useEffect(() => {

    }, [authenticated])

    return (
        <>
            <ConnectedRoute exact path='/' authenticated={Authenticated} component={Home} />
            <NormalRoute exact path='/cadastrar' authenticated={Authenticated} component={Signup} />
            <NormalRoute exact path='/login' authenticated={Authenticated} component={Login} />
        </>
    )
}
