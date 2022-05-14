import { List, ListItem, ListItemText } from "@mui/material";
import { Logout as LogoutIcon } from "@mui/icons-material";
import { logout } from '../../../states/actions/auth';
import { useDispatch } from "react-redux";

const LogOut = () =>
{
    const dispatch = useDispatch();

    const handleLogout = () =>
    {
        dispatch(logout());
        window.location.reload();
    }

    return (
        <List>
            <ListItem button component='li' onClick={handleLogout} >
                <LogoutIcon />
                <ListItemText primary='Logout' sx={{ ml: 3 }}/>
            </ListItem>
        </List>
    );
}

export default LogOut;