import React, { useState, useReducer } from 'react';
//Styles
import { Wrapper, FormWrapper, Title, Image } from '../Signup/styles';
//MUI STUff
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Components
import Form from '../../components/Login/Form';
import IconsSection from '../../components/Signup/IconsWrapper';
import ButtonSection from '../../components/Login/ButtonSection';

//images
import Fundo from '../../images/fundo.jpg';

export default function Login() {

    const classes = useStyles();

    const [userInfo, setUserInfo] = useReducer((state, newState) => ({...state, ...newState}),
        {
            email: "",
            password: ""
        }
    );

    return (
        <Wrapper>
            <Paper elevation={2} className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6} lg={8} className={classes.gridForm}>
                        <FormWrapper>
                            {/* Title */}
                            <Title>Login</Title>
                            {/* Icons represantation */}
                            <IconsSection classes={classes} />
                            {/* Form */}
                            <Form classes={classes} userInfo={userInfo} setUserInfo={setUserInfo} />
                            {/* Terms */}
                            {/* Button Container */}
                            <ButtonSection classes={classes} userInfo={userInfo} />
                        </FormWrapper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Image src={Fundo} alt="Fundo" />
                    </Grid>
                </Grid>
            </Paper>
        </Wrapper>
    )
}

const useStyles = makeStyles({
    paper: {
        padding: 0
    },
    buttonIncon: {
        border: '1px solid #d5d5d5',
        margin: 12
    },
    Textfield: {
        margin: 10
    },
    formControlLabel: {
        marginLeft: 0
    },
    ButtonSignup: {
        backgroundColor: '#d1462e',
        color: '#fff',
        textTransform: 'capitalize',
        fontSize: 18,
        '&:hover': {
            backgroundColor: '#d1442e'
        },
        padding: '10px 48px',
        margin: 4
    },
    ButtonLogin: {
        color: '#d1462e',
        fontSize: 18,
        borderColor: '#d1462e',
        padding: '10px 48px',
        margin: 4
    }
});