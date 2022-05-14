import CssBaseline  from '@mui/material/CssBaseline';
import SignupPage from '../pages/signup';
import Theme from '../Theme';

export default function Signup()
{
    return (
        <Theme>
            <CssBaseline />
            <SignupPage />
        </Theme>
    );
}