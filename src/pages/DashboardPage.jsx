import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';

import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge } from '@mui/x-charts/Gauge';

import { DataGrid } from '@mui/x-data-grid';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

/* ================= TABLE DATA ================= */

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
  },

  {
    field: 'firstName',
    headerName: 'First Name',
    width: 150,
    editable: true,
  },

  {
    field: 'lastName',
    headerName: 'Last Name',
    width: 150,
    editable: true,
  },

  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },

  {
    field: 'fullName',
    headerName: 'Full Name',
    width: 200,
    sortable: false,

    valueGetter: ({ row = {} } = {}) =>
      `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  {
    id: 1,
    lastName: 'Snow',
    firstName: 'Jon',
    age: 14,
  },

  {
    id: 2,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 31,
  },

  {
    id: 3,
    lastName: 'Lannister',
    firstName: 'Jaime',
    age: 31,
  },

  {
    id: 4,
    lastName: 'Stark',
    firstName: 'Arya',
    age: 11,
  },

  {
    id: 5,
    lastName: 'Targaryen',
    firstName: 'Daenerys',
    age: 30,
  },

  {
    id: 6,
    lastName: 'Ferrara',
    firstName: 'Rossini',
    age: 36,
  },

  {
    id: 7,
    lastName: 'Frances',
    firstName: 'Clifford',
    age: 44,
  },
];

/* ================= COMPONENT ================= */

export default function DashboardPage() {
  const totalUsers = rows.length;

  const averageAge =
    rows.reduce(
      (sum, row) => sum + (row.age || 0),
      0
    ) / rows.length;

  return (
    <Box sx={{ p: 2 }}>
      {/* ================= HEADER ================= */}

      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Dashboard
      </Typography>

      {/* ================= SUMMARY CARDS ================= */}

      <Stack
        direction={{
          xs: 'column',
          md: 'row',
        }}
        spacing={3}
        mb={4}
      >
        <Card
          sx={{
            flex: 1,
            borderRadius: 3,
          }}
        >
          <CardContent>
            <Typography variant="h6">
              Total Users
            </Typography>

            <Typography
              variant="h3"
              fontWeight="bold"
            >
              {totalUsers}
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            flex: 1,
            borderRadius: 3,
          }}
        >
          <CardContent>
            <Typography variant="h6">
              Average Age
            </Typography>

            <Typography
              variant="h3"
              fontWeight="bold"
            >
              {averageAge.toFixed(1)}
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* ================= GAUGES ================= */}

      <Paper
        elevation={3}
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
        >
          Performance Overview
        </Typography>

        <Stack
          direction={{
            xs: 'column',
            md: 'row',
          }}
          spacing={5}
          justifyContent="center"
          alignItems="center"
        >
          <Box textAlign="center">
            <Gauge
              width={150}
              height={150}
              value={75}
            />

            <Typography mt={1}>
              User Activity
            </Typography>
          </Box>

          <Box textAlign="center">
            <Gauge
              width={150}
              height={150}
              value={45}
            />

            <Typography mt={1}>
              System Usage
            </Typography>
          </Box>
        </Stack>
      </Paper>

      {/* ================= CHARTS ================= */}

      <Stack
        direction={{
          xs: 'column',
          lg: 'row',
        }}
        spacing={3}
        mb={4}
      >
        <Paper
          elevation={3}
          sx={{
            p: 2,
            flex: 1,
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
          >
            Quarterly Reports
          </Typography>

          <BarChart
            xAxis={[
              {
                scaleType: 'band',
                data: [
                  'Q1',
                  'Q2',
                  'Q3',
                  'Q4',
                ],
              },
            ]}
            series={[
              {
                data: [35, 44, 24, 34],
                label: 'Users',
              },

              {
                data: [51, 6, 30, 40],
                label: 'Reports',
              },
            ]}
            height={300}
          />
        </Paper>

        <Paper
          elevation={3}
          sx={{
            p: 2,
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
          >
            Category Distribution
          </Typography>

          <PieChart
            series={[
              {
                data: [
                  {
                    id: 0,
                    value: 10,
                    label: 'Admin',
                  },

                  {
                    id: 1,
                    value: 15,
                    label: 'Editor',
                  },

                  {
                    id: 2,
                    value: 20,
                    label: 'Viewer',
                  },
                ],
              },
            ]}
            width={320}
            height={300}
          />
        </Paper>
      </Stack>

      {/* ================= DATA GRID ================= */}

      <Paper
        elevation={3}
        sx={{
          p: 2,
          borderRadius: 3,
          mb: 4,
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
        >
          Users Table
        </Typography>

        <Box
          sx={{
            height: 400,
            width: '100%',
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[5]}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                  page: 0,
                },
              },
            }}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Paper>

      {/* ================= MAP ================= */}

      <Paper
        elevation={3}
        sx={{
          p: 2,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
        >
          Location Map
        </Typography>

        <Box
          sx={{
            height: 500,
            width: '100%',
            borderRadius: 3,
            overflow: 'hidden',
          }}
        >
          <MapContainer
            center={[14.604253, 120.994314]}
            zoom={13}
            style={{
              height: '100%',
              width: '100%',
            }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />

            <Marker
              position={[
                14.604253,
                120.994314,
              ]}
            >
              <Popup>
                National University Manila
              </Popup>
            </Marker>
          </MapContainer>
        </Box>
      </Paper>
    </Box>
  );
}