import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Stack,
  Typography,
  Grid,
  MenuItem,
  Paper,
} from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';

const emptyForm = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  contactNumber: '',
  email: '',
  username: '',
  password: '',
  address: '',
  type: 'editor',
  isActive: true,
};

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);

  // FETCH USERS
  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        'http://localhost:8000/api/users'
      );

      setUsers(res.data.users || res.data || []);
    } catch (err) {
      console.log('GET USERS ERROR:', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ADD USER
  const handleAddUser = async () => {
    try {
      if (
        !form.firstName ||
        !form.lastName ||
        !form.age ||
        !form.gender ||
        !form.contactNumber ||
        !form.email ||
        !form.username ||
        !form.password ||
        !form.address
      ) {
        return alert(
          'Please fill all required fields'
        );
      }

      await axios.post(
        'http://localhost:8000/api/users',
        form
      );

      alert('User added successfully');

      setOpen(false);
      setForm(emptyForm);

      fetchUsers();
    } catch (err) {
      console.log('ADD USER ERROR:', err);

      alert(
        err.response?.data?.message ||
          'Error adding user'
      );
    }
  };

  // SEARCH FILTER
  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      const searchValue =
        search.toLowerCase();

      return (
        u.firstName
          ?.toLowerCase()
          .includes(searchValue) ||
        u.lastName
          ?.toLowerCase()
          .includes(searchValue) ||
        u.username
          ?.toLowerCase()
          .includes(searchValue)
      );
    });
  }, [users, search]);

  // TABLE COLUMNS
  const columns = [
    {
      field: '_id',
      headerName: 'ID',
      flex: 1,
    },
    {
      field: 'fullName',
      headerName: 'Full Name',
      flex: 1,
      valueGetter: ({ row = {} } = {}) =>
        `${row.firstName || ''} ${row.lastName || ''}`,
    },
    {
      field: 'username',
      headerName: 'Username',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'type',
      headerName: 'Role',
      flex: 1,
    },
    {
      field: 'isActive',
      headerName: 'Status',
      flex: 1,
      renderCell: (params) => (
        <Chip
          label={
            params.value
              ? 'Active'
              : 'Inactive'
          }
          color={
            params.value
              ? 'success'
              : 'default'
          }
          size="small"
        />
      ),
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      {/* PAGE TITLE */}
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Users Management
      </Typography>

      {/* MAIN CONTAINER */}
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 3,
        }}
      >
        {/* TOP ACTIONS */}
        <Stack
          direction={{
            xs: 'column',
            md: 'row',
          }}
          spacing={2}
          justifyContent="space-between"
          sx={{ mb: 3 }}
        >
          <TextField
            fullWidth
            placeholder="Search users..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <Button
            variant="contained"
            size="large"
            onClick={() => setOpen(true)}
            sx={{
              minWidth: 180,
            }}
          >
            ADD USER
          </Button>
        </Stack>

        {/* TABLE */}
        <Box
          sx={{
            height: 550,
            width: '100%',
          }}
        >
          <DataGrid
            rows={filteredUsers}
            columns={columns}
            getRowId={(row) => row._id}
            pageSizeOptions={[
              5,
              10,
              20,
            ]}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            sx={{
              borderRadius: 3,
              bgcolor: '#fff',
            }}
          />
        </Box>
      </Paper>

      {/* ADD USER MODAL */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          Add New User
        </DialogTitle>

        <DialogContent>
          <Grid
            container
            spacing={2}
            sx={{ mt: 1 }}
          >
            {/* LEFT SIDE */}
            <Grid
              size={{ xs: 12, md: 6 }}
            >
              <TextField
                label="First Name"
                fullWidth
                margin="normal"
                value={form.firstName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    firstName:
                      e.target.value,
                  })
                }
              />

              <TextField
                label="Age"
                fullWidth
                margin="normal"
                value={form.age}
                onChange={(e) =>
                  setForm({
                    ...form,
                    age: e.target.value,
                  })
                }
              />

              <TextField
                label="Contact Number"
                fullWidth
                margin="normal"
                value={form.contactNumber}
                onChange={(e) =>
                  setForm({
                    ...form,
                    contactNumber:
                      e.target.value,
                  })
                }
              />

              <TextField
                select
                label="Role"
                fullWidth
                margin="normal"
                value={form.type}
                onChange={(e) =>
                  setForm({
                    ...form,
                    type: e.target.value,
                  })
                }
              >
                <MenuItem value="admin">
                  Admin
                </MenuItem>

                <MenuItem value="editor">
                  Editor
                </MenuItem>

                <MenuItem value="viewer">
                  Viewer
                </MenuItem>
              </TextField>
            </Grid>

            {/* RIGHT SIDE */}
            <Grid
              size={{ xs: 12, md: 6 }}
            >
              <TextField
                label="Last Name"
                fullWidth
                margin="normal"
                value={form.lastName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    lastName:
                      e.target.value,
                  })
                }
              />

              <TextField
                label="Gender"
                fullWidth
                margin="normal"
                value={form.gender}
                onChange={(e) =>
                  setForm({
                    ...form,
                    gender:
                      e.target.value,
                  })
                }
              />

              <TextField
                label="Email"
                fullWidth
                margin="normal"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email:
                      e.target.value,
                  })
                }
              />

              <TextField
                label="Username"
                fullWidth
                margin="normal"
                value={form.username}
                onChange={(e) =>
                  setForm({
                    ...form,
                    username:
                      e.target.value,
                  })
                }
              />

              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                value={form.password}
                onChange={(e) =>
                  setForm({
                    ...form,
                    password:
                      e.target.value,
                  })
                }
              />

              <TextField
                label="Address"
                fullWidth
                margin="normal"
                value={form.address}
                onChange={(e) =>
                  setForm({
                    ...form,
                    address:
                      e.target.value,
                  })
                }
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleAddUser}
          >
            Save User
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}