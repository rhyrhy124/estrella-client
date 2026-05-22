import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, name: 'Juan Dela Cruz', age: 21 },
  { id: 2, name: 'Maria Santos', age: 22 },
  { id: 3, name: 'Pedro Reyes', age: 23 },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'age', headerName: 'Age', width: 120 },
];

const UsersPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </Box>
  );
};

export default UsersPage;