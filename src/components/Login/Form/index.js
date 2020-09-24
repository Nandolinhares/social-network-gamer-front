import React from 'react';
//Styles
import { FormContainer } from './styles';
//MUI STUff
import TextField from '@material-ui/core/TextField';

export default function Form({ classes, userInfo, setUserInfo }) {

    // Change User field
    const handleChangeUserField = (event) => {
        const { name, value } = event.target;
        setUserInfo({ [name]: value })
    }

    return (
        <FormContainer noValidate autoComplete="off">
            <TextField
                label="Email"
                id="outlined-size-small"
                name="email"
                type="email"
                placeholder="Email"
                variant="outlined"
                size="small"
                fullWidth
                onChange={handleChangeUserField}
                className={classes.Textfield}
                value={userInfo.email || ""}
                required
            />
            <TextField
                label="Password"
                id="outlined-size-small"
                name="password"
                type="password"
                placeholder="Password"
                variant="outlined"
                size="small"
                fullWidth
                onChange={handleChangeUserField}
                className={classes.Textfield}
                value={userInfo.password || ""}
                required
            />
        </FormContainer>
    )
}
