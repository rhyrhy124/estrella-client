import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleIcon from '@mui/icons-material/People';

const drawerWidth = 240;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Reports', icon: <AssessmentIcon />, path: '/dashboard/reports' },
  { text: 'Users', icon: <PeopleIcon />, path: '/dashboard/users' },
];

const DashLayout = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/auth/signin');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* TOP BAR */}
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <IconButton onClick={() => setOpen(!open)} color="inherit">
            <MenuIcon />
          </IconButton>

          <Typography sx={{ flexGrow: 1, ml: 2 }}>
            Admin Dashboard
          </Typography>

          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* SIDEBAR */}
      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidth : 60,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : 60,
            transition: '0.3s',
            overflowX: 'hidden',
          },
        }}
      >
        <Toolbar />

        <List>
          {menuItems.map((item) => (
            <Box
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: 2,
                textDecoration: 'none',
                color: location.pathname === item.path ? '#d81b60' : '#333',
              }}
            >
              {item.icon}
              {open && item.text}
            </Box>
          ))}
        </List>

        <Divider />
      </Drawer>

      {/* MAIN CONTENT */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashLayout;