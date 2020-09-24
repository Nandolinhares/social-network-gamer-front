import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function ConnectedRoute({ component: Component, authenticated, ...rest }) {
    return (
        <Route 
            {...rest}
            render={props => 
                authenticated === false ? <Redirect to='/login' /> : <Component {...props} />
            }
        />
    )
}
