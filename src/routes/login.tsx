import CssBaseline  from '@mui/material/CssBaseline';
import LoginPage from '../pages/login';
import Theme from '../Theme';

export default function Login()
{
    return (
        <Theme>
            <CssBaseline />
            <LoginPage />
        </Theme>
    );
}