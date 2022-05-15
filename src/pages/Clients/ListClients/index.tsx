import React, { useEffect } from "react";
import { Divider, Grid, Typography, Snackbar, Alert } from '@mui/material';
import { GridColDef, GridCellParams } from '@mui/x-data-grid';

import Edit from './Components/Edit';
import Add from './Components/Add';
import Delete from './Components/Delete';

import CustomDataGrid from '../../../components/DataGrid';
import Layout from '../../../layouts/dashboard';
import { useDispatch, useSelector } from "react-redux";
import { list } from "../../../store/modules/client/actions";

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

export const ListClientsPage = () => {
	const dispatch = useDispatch();
	const { item, error } = useSelector<any, any>(item => item.client)

	useEffect(() => {
		dispatch(list());
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
					{Array.isArray(item?.data) && (
						<CustomDataGrid 
							div={{ width: '100%', height: 500 }}
							dataGrid={{ columns, rows: item?.data }}
						/>
					)}
				</Grid>
			</Grid>

			<Snackbar open={error} autoHideDuration={300}>
        <Alert severity="error" sx={{ width: '100%' }}>
          Something went wrong while trying to load resources
        </Alert>
      </Snackbar>
		</Layout>
	);
}
