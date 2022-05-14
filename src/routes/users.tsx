import React from 'react';
import CssBaseline  from '@mui/material/CssBaseline';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UsersPage from '../pages/users';
import Theme from '../Theme';

export default function Users()
{
    const navigate: any = useNavigate();
    const isLoggedIn = useSelector((state: RootStateOrAny) => state.auth)

    React.useEffect(() => 
    {
        if (!isLoggedIn?.token)
            return navigate('/login');
    }, [])

    return (
        <Theme>
            <CssBaseline />
            <UsersPage />
        </Theme>
    );
}