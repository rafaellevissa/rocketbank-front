import * as React from 'react';
import LoginButton from '../Button';
import { useNavigate } from "react-router-dom";
import { doTryLogin } from '../../../states/actions/auth';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { Box, Checkbox, FormControlLabel, TextField } from '@mui/material';

const Form = () =>
{
    const dispatch: any = useDispatch();
    const navigate: any = useNavigate();
    const isLogged = useSelector((state: RootStateOrAny) => state.auth)

    const [formValues, setFormValues] = React.useState({ email: '', password: '' });

    const handleChange = (event: any) =>
    {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event: any) =>
    {
        event.preventDefault();

        dispatch(doTryLogin(formValues.email, formValues.password)).then(() => 
        {
            window.location.reload();
        })
        .catch(() => {
            
        });
    };

    React.useEffect(() => 
    {
        if (isLogged?.token) {
            navigate('/', { replace: true });
        }
    }, [isLogged, navigate]);

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <Box sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={handleChange}
                        autoFocus
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
                        label="Remember me"
                    />
                    <LoginButton type="submit" variant='contained' fullWidth>
                        Log In
                    </LoginButton>
                </Box>
            </form>
        </div>
    );
}

export default Form;