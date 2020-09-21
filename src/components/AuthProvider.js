import React, { useEffect } from 'react';
//Firebase
import * as firebase from 'firebase/app';

export default function AuthProvider({ children }) {

    useEffect(() => {
        const unsubscribeListener = firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              console.log(user);
            } else {
                console.log("Desconectado");
            }
          });

        return () => unsubscribeListener;
    }, [])

    return children;
}
