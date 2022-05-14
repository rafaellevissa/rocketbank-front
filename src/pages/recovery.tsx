import * as React from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline  from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function RecoveryForm()
{
    return (
        <div>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
            />
            <Button type="submit" variant='contained' fullWidth sx={{
                mt: 3,
                mb: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '3px',
                background: '#90CAF9',
                position: 'static',
                boxShadow: '0px 3px 1px -2px',
                borderRadius: '4px'
            }}>
                RECOVERY
            </Button>
        </div>
    )
}

function RecoveryBox()
{
    return (
        <div>
            <Box sx={{
                marginTop: 30,
                display: 'flex',
                flexDirection: 'column',
                borderColor: 'text.secondary',
                boxShadow: '0px 0px 0px 1px #FFFFFF',
                borderRadius: '4px',
                padding: '3rem',
                paddingTop: '1rem',
                paddingBottom: '1rem'
            }}>
                <Typography component="h1" variant="h5">
                    Recovery Password
                </Typography>
                <Typography>
                    Input your email. An email will be sent to you with instructions. 
                </Typography>
                <RecoveryForm />
            </Box>
        </div>
    )
}

const theme = createTheme({
    palette: {
        mode: 'dark',
    }
});

function Recovery()
{
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <RecoveryBox />
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default Recovery;