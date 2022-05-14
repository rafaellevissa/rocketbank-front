import { Container, Paper, Typography } from "@mui/material";
import LampThemeToggle from '../components/LampTheme';
import { SignupForm } from "../components/Signup";

const SignupPage = () =>
{
    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <LampThemeToggle />
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
                <Typography component="h1" variant="h5">
                    Sign UP
                </Typography>
                <Typography>
                    Input your credentials  
                </Typography>

                <SignupForm />

            </Paper>
        </Container>
    );
}

export default SignupPage;