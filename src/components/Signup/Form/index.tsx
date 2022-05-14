import * as React from 'react';

import { useNavigate } from "react-router-dom";
import { SignupButton } from '..';
import { doRegisterUser } from '../../../states/actions/auth';
import { Box, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

const Form = () =>
{
    const dispatch: any = useDispatch();
    const navigate: any = useNavigate();
    const isLogged = useSelector((state: RootStateOrAny) => state.auth)

    const [formValues, setFormValues] = React.useState({ name: '', email: '', password: '' });
    const [isLoggedIn] = React.useState(isLogged.auth);

    const handleSubmit = (event: any) =>
    {
        event.preventDefault();

        dispatch(doRegisterUser(formValues)).then(() => 
        {
            window.location.reload();
        })
        .catch(() => {
            /* 
                TO-DO
                ERROR NOTIFICATION
            */
        });
    };

    const handleChange = (event: any) =>
    {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    };

    React.useEffect(() => 
    {
        if (isLoggedIn)
            return navigate('/dashboard');
    });

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <Box sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Full Name"
                        name="name"
                        autoComplete="fullname"
                        onChange={handleChange}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        onChange={handleChange}
                    />
                    <FormControlLabel 
                        control={<Checkbox value="remember" color="primary" />}
                        label="I accept the terms and conditions."
                    />
                    <SignupButton type="submit" variant='contained' fullWidth>
                        Sign UP
                    </SignupButton>
                </Box>
            </form>
        </div>
    );
}

export default Form;