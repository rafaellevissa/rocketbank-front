import React, { useEffect, useState } from "react";
import { Divider, Grid, Typography } from '@mui/material';
import { GridColDef, GridCellParams } from '@mui/x-data-grid';
import { Add, Delete, Edit } from "../components/Users";

import CustomDataGrid from '../components/DataGrid';
import Layout from '../layouts/dashboard';
import UserService from '../services/user-service';
import { RootStateOrAny, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const columns: GridColDef[] =
[
	{ field: 'id', headerName: 'ID', minWidth: 30, flex: 0.3 },
	{ field: 'name', headerName: 'Name', minWidth: 200, flex: 1 },
	{ field: 'birthdate', headerName: 'Birthdate', minWidth: 200, flex: 1 },
	
	{ 
		field: 'actions', 
		headerName: 'Actions', 
		minWidth: 50, 
		flex: 1,
		
		renderCell: (params: GridCellParams) =>
		{
			return (
				<div>
					<Edit id={params.row.id} />
					<Delete id={params.row.id} />
				</div>
			);
		}
	},
]

export default function UsersPage()
{
	const [users, setUsers] = useState([]);

	const navigate: any = useNavigate();
	const isLoggedIn = useSelector((state: RootStateOrAny) => state.auth)

	useEffect(() => {
		if (!isLoggedIn?.token) {
			return navigate('/login');
		} else {
			UserService.getCollaborators()
				.then(({ data }) => setUsers(data.data));
		}
	}, []);

	return (
		<Layout>
			<Grid container sx={{ width: '100%' }}>
				<Grid item xs={12}>
					<Typography variant='h6' > Users </Typography>
					<Divider />
				</Grid>

				<Grid item xs={12}>
					<Add />
				</Grid>

				<Grid item xs={12}>
					{users && (
						<CustomDataGrid 
							div={{ width: '100%', height: 500 }}
							dataGrid={{ columns, rows: users }}
						/>
					)}
				</Grid>
			</Grid>
		</Layout>
	);
}