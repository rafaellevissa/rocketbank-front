import { GridColDef } from '@mui/x-data-grid';

export type DivProps = 
{
	width: string;
    height: number;
}

export type DataGridProps =
{
    rows?: any;
    columns: GridColDef[];
}

export type CustomDataGridProps = 
{
    div: DivProps;
    dataGrid: DataGridProps;
}