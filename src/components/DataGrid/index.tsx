import * as React from 'react';
import { CustomDiv } from './styles';
import { CustomDataGridProps } from './types';
import { DataGrid } from '@mui/x-data-grid';

export default function CustomDataGrid(props: CustomDataGridProps)
{
	return (
		<CustomDiv width={ props.div.width } height={ props.div.height } >
			<DataGrid 
				rows={props.dataGrid.rows}
				columns={props.dataGrid.columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				disableSelectionOnClick
			/>
		</CustomDiv>
	);
}