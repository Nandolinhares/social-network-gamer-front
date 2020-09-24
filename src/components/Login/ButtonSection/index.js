import React from 'react';
import { Link } from 'react-router-dom';
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
        const userData = {
            email: userInfo.email.trim(),
            password: userInfo.password.trim()
        }

        if(userData.email === "" || userData.password === "") {
            alert("Não deixe campos em branco")
        } else {
            firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
                .then(() => {
                    console.log("Logou");
                })
                .catch(error => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        alert('Senha incorreta');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                })
        }
    }

    return (
        <ButtonContainer>
            {/* Button Signup */}
            <Button variant="contained" className={classes.ButtonSignup} component={Link} to='/cadastrar'>Sign Up</Button>
            {/* Button Login */}
            <Button variant="outlined" className={classes.ButtonLogin} onClick={handleSubmit}>Login</Button>
        </ButtonContainer>
    )
}
