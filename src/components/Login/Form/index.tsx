import * as React from 'react';
import LoginButton from '../Button';
import { Box, Checkbox, FormControlLabel, TextField } from '@mui/material';

const Form = () => {
    return (
        <div>
            <form >
                <Box sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
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