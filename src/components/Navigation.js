import React, { useState } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Box,
  ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AUTH_COMPONENTS, DRAWER } from '../constants';
import { ROUTE_PATHS } from '../routes';
import { setCurrentComponent } from '../features/authComponent';

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const isLandingPage = location.pathname === ROUTE_PATHS.AUTH;
  // we don't want the mobile navigation showing on the landing page
  // landing page aka login/register (auth) page

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <List>
        <ListItem>
          <Typography variant="h5" sx={{ fontWeight: 'extraBold' }}>
            Praksa.ba
          </Typography>
        </ListItem>
        <ListItemButton component="a" href={ROUTE_PATHS.AUTH}>
          <ListItemText primary="Početna" />
        </ListItemButton>
        <ListItemButton component="a" href={ROUTE_PATHS.HOME}>
          <ListItemText primary="Pretraži oglase" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Postavke" />
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            Kompanija ste?
          </Typography>
        </ListItem>
        <ListItemButton onClick={() => {
          dispatch(setCurrentComponent(AUTH_COMPONENTS.LOGIN));
          navigate(ROUTE_PATHS.AUTH);
        }}
        >
          <ListItemText primary="Prijavite se" />
        </ListItemButton>
        <ListItemButton onClick={() => {
          dispatch(setCurrentComponent(AUTH_COMPONENTS.REGISTER));
          navigate(ROUTE_PATHS.AUTH);
        }}
        >
          <ListItemText primary="Registrujte se" />
        </ListItemButton>
      </List>
    </>
  );

  return (
    <>
      {!isLandingPage && (
      <AppBar position="fixed" sx={{ bottom: -1, top: 'auto', display: { md: 'none' } }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
      )}
      <Box
        component="nav"
        sx={{
          width: { md: DRAWER.WIDTH },
          flexShrink: { md: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          anchor="bottom"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              width: '100%',
              borderRadius: '20px 20px 0 0',
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              bgcolor: 'primary.main',
              color: 'white',
              width: DRAWER.WIDTH,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default Navigation;
