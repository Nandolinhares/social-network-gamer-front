import React, { useState } from 'react';
//Styles
import { Wrapper, FormWrapper, Form, Title, Image, IconsWrapper, Description, ButtonContainer } from './styles';
//MUI STUff
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
//Form
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

//images
import Fundo from '../../images/fundo.jpg';
//Icons
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

export default function Signup() {

    const classes = useStyles();

    const [checked, setChecked] = useState(false);

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
                            <IconsWrapper>
                                <IconButton aria-label="Youtube" className={classes.buttonIncon}>
                                    <YouTubeIcon fontSize="small" />
                                </IconButton>
                                <IconButton aria-label="Facebook" className={classes.buttonIncon}>
                                    <FacebookIcon fontSize="small" />
                                </IconButton>
                                <IconButton aria-label="Twitter" className={classes.buttonIncon}>
                                    <TwitterIcon fontSize="small" />
                                </IconButton>
                                <IconButton aria-label="Email" className={classes.buttonIncon}>
                                    <EmailIcon fontSize="small" />
                                </IconButton>
                            </IconsWrapper>
                            {/* Description */}
                            <Description> or use your email for registration</Description>
                            {/* Form */}
                            <Form noValidate autoComplete="off">
                                <TextField
                                    label="Name"
                                    id="outlined-size-small"
                                    name="name"
                                    placeholder="Name"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    className={classes.Textfield}
                                />
                                <TextField
                                    label="Email"
                                    id="outlined-size-small"
                                    name="email"
                                    placeholder="Email"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    className={classes.Textfield}
                                />
                                <TextField
                                    label="Password"
                                    id="outlined-size-small"
                                    name="password"
                                    placeholder="Password"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    className={classes.Textfield}
                                />
                            </Form>
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
                            <ButtonContainer>
                                {/* Button Signup */}
                                <Button variant="contained" className={classes.ButtonSignup}>Sign Up</Button>
                                {/* Button Login */}
                                <Button variant="outlined" className={classes.ButtonLogin}>Login</Button>
                            </ButtonContainer>
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