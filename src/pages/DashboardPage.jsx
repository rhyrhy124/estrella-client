import React from 'react';
import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge } from '@mui/x-charts/Gauge';

import { DataGrid } from '@mui/x-data-grid';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

/* -------------------- DATA GRID -------------------- */
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First Name', width: 150, editable: true },
  { field: 'lastName', headerName: 'Last Name', width: 150, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true },
  {
    field: 'fullName',
    headerName: 'Full Name',
    width: 160,
    sortable: false,
    valueGetter: (value, row) =>
      `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 30 },
  { id: 6, lastName: null, firstName: null, age: 150 },
  { id: 7, lastName: 'Ferrara', firstName: 'Rossini', age: 36 },
  { id: 8, lastName: 'Frances', firstName: 'Clifford', age: 44 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function DashboardPage() {
  const location = useLocation();

  const totalUsers = rows.length;

  const averageAge =
    rows.reduce((sum, row) => sum + (row.age || 0), 0) /
    rows.filter((row) => row.age != null).length;

  return (
    <Box sx={{ p: 3 }}>
      {/* HEADER */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Dashboard
      </Typography>

      {/* SUMMARY CARDS */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} mb={4}>
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="h4">{totalUsers}</Typography>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="h6">Average Age</Typography>
            <Typography variant="h4">
              {averageAge.toFixed(1)}
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* GAUGES */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} mb={4}>
        <Gauge width={120} height={120} value={60} />
        <Gauge width={120} height={120} value={40} valueMin={0} valueMax={100} />
      </Stack>

      {/* CHARTS */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} mb={4}>
        <BarChart
          xAxis={[
            { scaleType: 'band', data: ['Q1', 'Q2', 'Q3', 'Q4'] },
          ]}
          series={[
            { data: [35, 44, 24, 34], label: 'Series 1' },
            { data: [51, 6, 30, 40], label: 'Series 2' },
          ]}
          height={300}
        />

        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: 'Series A' },
                { id: 1, value: 15, label: 'Series B' },
                { id: 2, value: 20, label: 'Series C' },
              ],
            },
          ]}
          width={300}
          height={300}
        />
      </Stack>

      {/* DATA GRID */}
      <Typography variant="h5" gutterBottom>
        Users Table
      </Typography>

      <Box sx={{ height: 400, width: '100%', mb: 4 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5, page: 0 },
            },
          }}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>

      {/* MAP */}
      <Typography variant="h5" gutterBottom>
        Location Map
      </Typography>

      <Box sx={{ height: 500, width: '100%' }}>
        <MapContainer
          center={[14.604253, 120.994314]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          <Marker position={[14.604253, 120.994314]}>
            <Popup>
              National University - Manila <br />
              551 F Jhocson St, Sampaloc, Manila
            </Popup>
          </Marker>
        </MapContainer>
      </Box>
    </Box>
  );
}

export default DashboardPage;