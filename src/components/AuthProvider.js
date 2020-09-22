import React, { useEffect } from 'react';
//Firebase
import * as firebase from 'firebase/app';
//Redux
import { useDispatch } from 'react-redux';

export default function AuthProvider({ children }) {

    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribeListener = firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              user.getIdToken(true)
                .then(idToken => {
                  localStorage.setItem('FBIdToken', idToken);
                  dispatch({ type: 'SET_AUTHENTICATED' });
                })
                .catch(err => console.error(err));
            } else {
              dispatch({ type: 'SET_UNAUTHENTICATED' });
            }
          });

        return () => unsubscribeListener;
    }, [])

    return children;
}
