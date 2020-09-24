import React from 'react';
//Styles
import { Wrapper, Title } from './styles';
//MUI STUff
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
//Firebase
import * as firebase from 'firebase/app';
import 'firebase/auth';

//Components
import Menu from '../../components/Home/Menu';

//Images
import FundoMenu from '../../images/fundoMenu.jpg';

export default function Home() {

    const classes = useStyles();

    // const handleLogout = () => {
    //     firebase.auth().signOut()
    //         .then(() => {
    //             console.log("Deslogado");
    //             localStorage.removeItem('FBIdToken');
    //         })
    //         .catch(err => console.error(err)) 
    // }

    return (
        <Wrapper>
            <Grid container spacing={2}>
                <Grid item md={3} lg={3} className={classes.menuGrid}>
                    <Menu />
                </Grid>
                <Grid item md={6} lg={6} className={classes.mainGrid}></Grid>
                <Grid item md={3} lg={3} className={classes.groupGrid}></Grid>
            </Grid>
            {/* <Title>Hello World</Title>
            <Button variant="contained" color="secondary" onClick={handleLogout}>Sair</Button> */}
        </Wrapper>
    )
}

const useStyles = makeStyles({
    menuGrid: {
        backgroundImage: `url(${FundoMenu})`,
        marginTop: 28, 
        borderRadius: 20, 
        height: 800, 
        backgroundRepeat: 'no-repeat'
    },
    mainGrid: {
        backgroundColor: '#f7f7ff',
        marginTop:  28
    },
    groupGrid: {
        backgroundColor: '#fff1e5',
        marginTop: 28,
        borderRadius: 20
    }
})