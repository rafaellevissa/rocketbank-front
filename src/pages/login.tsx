import { Container, Paper, Typography } from '@mui/material';
import { LoginForm } from '../components/Login';
import LampThemeToggle from '../components/LampTheme';

const LoginPage = () =>
{
    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <LampThemeToggle />
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
                <Typography component="h1" variant="h5">
                    Log In
                </Typography>
                <Typography>
                    Input your credentials  
                </Typography>

                <LoginForm />

            </Paper>
        </Container>
    )
}

export default LoginPage;