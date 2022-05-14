import { Divider, List, Toolbar, Typography } from '@mui/material';
import { Group } from '@mui/icons-material';
import ListItemLink from '../../ListItemLink';
import LogOut from '../Logout';

import { DrawerProps } from './types';
import { CustomDrawer } from './styles';

export default function SideBar(props: DrawerProps)
{
    return (
			<CustomDrawer width={props.width} variant="permanent" anchor="left">
			<Toolbar sx={{ alignItems: 'center' }}>
				<Typography align='center' variant="subtitle1" sx={{ mt: 1, ml: 5 }} >
					ROCKETBANK
				</Typography>
			</Toolbar>
			<Divider />
			<List>
					<ListItemLink to="../users" primary="Users" icon={ <Group /> } isCollapsed />
			</List>
			<Divider />
			<Toolbar sx={{ flexGrow: 1 }} />
			<Divider />
			<LogOut />
        </CustomDrawer>
    );
}