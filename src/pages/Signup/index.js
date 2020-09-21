import React, { useState, useReducer } from 'react';
//Styles
import { Wrapper, FormWrapper, Title, Image, Description } from './styles';
//MUI STUff
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
//Form
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

//Components
import Form from '../../components/Signup/Form';
import IconsSection from '../../components/Signup/IconsWrapper';
import ButtonSection from '../../components/Signup/ButtonSection';

//images
import Fundo from '../../images/fundo.jpg';

export default function Signup() {

    const classes = useStyles();

    const [checked, setChecked] = useState(false);

    const [userInfo, setUserInfo] = useReducer((state, newState) => ({...state, ...newState}),
        {
            name: "",
            email: "",
            password: "",
            imageUrl: ""
        }
    );

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <Wrapper>
            <Paper elevation={2} className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6} lg={8} className={classes.gridForm}>
                        <FormWrapper>
                            {/* Title */}
                            <Title>Create Account</Title>
                            {/* Icons represantation */}
                            <IconsSection classes={classes} />
                            {/* Description */}
                            <Description> or use your email for registration</Description>
                            {/* Form */}
                            <Form classes={classes} userInfo={userInfo} setUserInfo={setUserInfo} />
                            {/* Terms */}
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                                }
                                label="I agree to the Terms and Privacy Policy"
                                className={classes.formControlLabel}
                            />
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