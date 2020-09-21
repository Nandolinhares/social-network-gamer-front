import React from 'react';
//Styles
import { ButtonContainer } from './styles';
//MUI STUff
import Button from '@material-ui/core/Button';
//Firebase
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default function ButtonSection({ classes, userInfo }) {

    // Send userinfo
    const handleSubmit = () => {
        const newUser = {
            name: userInfo.name,
            email: userInfo.email,
            password: userInfo.password,
            imageUrl: userInfo.imageUrl
        }

        if(newUser.name === "" || newUser.email === "" || newUser.password === "" || newUser.imageUrl === "") {
            alert("Não deixe campos em branco")
        } else {
            firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
                .then(() => {
                    console.log("Usuário aceito");
                })
                .catch(error => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode === 'auth/weak-password') {
                        alert('Adicione uma senha mais forte');
                    } else if(errorCode === 'auth/invalid-email') {
                        alert("O email não é válido");
                    }
                    else {
                        alert(errorMessage);
                    }
                    console.log(error);
                }) 
        }
    }

    return (
        <ButtonContainer>
            {/* Button Signup */}
            <Button variant="contained" className={classes.ButtonSignup} onClick={handleSubmit || ""}>Sign Up</Button>
            {/* Button Login */}
            <Button variant="outlined" className={classes.ButtonLogin}>Login</Button>
        </ButtonContainer>
    )
}
