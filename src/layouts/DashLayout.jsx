import { useState } from 'react';
import {
  Outlet,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  List,
  Divider,
  IconButton,
  Typography,
  Button,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';

const drawerWidth = 240;
const collapsedWidth = 70;

/* ================= MENU ================= */
const menuItems = [
  {
    text: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/dashboard',
  },
  {
    text: 'Reports',
    icon: <AssessmentIcon />,
    path: '/dashboard/reports',
  },
  {
    text: 'Users',
    icon: <PeopleIcon />,
    path: '/dashboard/users',
  },
  {
    text: 'Articles',
    icon: <ArticleIcon />,
    path: '/dashboard/articles',
  },
];

export default function DashLayout() {
  const [open, setOpen] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const currentDrawerWidth = open
    ? drawerWidth
    : collapsedWidth;

  const handleLogout = () => {
    navigate('/auth/signin');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* ================= APPBAR ================= */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${currentDrawerWidth}px)`,
          ml: `${currentDrawerWidth}px`,
          bgcolor: '#fff',
          color: '#000',
          boxShadow: 1,
          transition: '0.3s',
        }}
      >
        <Toolbar>
          <IconButton
            onClick={() => setOpen(!open)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              ml: 2,
              fontWeight: 'bold',
            }}
          >
            Admin Dashboard
          </Typography>

          <Button
            variant="contained"
            color="error"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* ================= SIDEBAR ================= */}
      <Drawer
        variant="permanent"
        sx={{
          width: currentDrawerWidth,
          flexShrink: 0,

          '& .MuiDrawer-paper': {
            width: currentDrawerWidth,
            transition: '0.3s',
            overflowX: 'hidden',
            boxSizing: 'border-box',
            bgcolor: '#111827',
            color: '#fff',
            borderRight: 'none',
          },
        }}
      >
        <Toolbar />

        <Divider />

        <List sx={{ mt: 1 }}>
          {menuItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              location.pathname.startsWith(
                item.path + '/'
              );

            return (
              <ListItemButton
                key={item.text}
                component={Link}
                to={item.path}
                selected={isActive}
                sx={{
                  mx: 1,
                  my: 0.5,
                  borderRadius: 2,

                  justifyContent: open
                    ? 'initial'
                    : 'center',

                  px: 2,

                  '&.Mui-selected': {
                    backgroundColor: '#2563eb',
                    color: '#fff',

                    '& .MuiListItemIcon-root':
                      {
                        color: '#fff',
                      },
                  },

                  '&:hover': {
                    backgroundColor: '#1d4ed8',
                    color: '#fff',

                    '& .MuiListItemIcon-root':
                      {
                        color: '#fff',
                      },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: '#fff',
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                {open && (
                  <ListItemText
                    primary={item.text}
                  />
                )}
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>

      {/* ================= MAIN CONTENT ================= */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: '#f5f7fb',
          minHeight: '100vh',
          width: `calc(100% - ${currentDrawerWidth}px)`,
          transition: '0.3s',
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}