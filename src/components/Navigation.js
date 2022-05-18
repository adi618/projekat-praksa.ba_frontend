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
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_COMPONENTS, DRAWER } from '../constants';
import { ROUTE_PATHS } from '../routes';
import { setCurrentComponent } from '../features/authComponent';
import { logout } from '../features/user';

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const userData = useSelector((state) => state.user);

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
          <ListItemText
            primary="Praksa.ba"
            primaryTypographyProps={{ variant: 'h5', fontWeight: 'extraBold' }}
          />
        </ListItem>
        <ListItemButton onClick={() => navigate(ROUTE_PATHS.AUTH)}>
          <ListItemText primary="Početna" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate(ROUTE_PATHS.HOME)}>
          <ListItemText primary="Pretraži oglase" />
        </ListItemButton>
      </List>
      <Divider sx={{ bgcolor: 'white', mx: 4 }} />
      <List>
        <ListItem>
          <ListItemText
            primary={userData.isLoggedIn ? userData.user.companyName : 'Kompanija ste?'}
            primaryTypographyProps={{ variant: 'h6', fontWeight: 'medium' }}
          />
        </ListItem>
        {userData.isLoggedIn
          ? (
            <ListItemButton onClick={() => {
              dispatch(logout());
            }}
            >
              <ListItemText primary="Odjavite se" />
            </ListItemButton>
          ) : (
            <>
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
            </>
          )}
      </List>
    </>
  );

  return (
    <>
      {!isLandingPage && (
      <AppBar
        position="fixed"
        sx={{
          bottom: -1,
          top: 'auto',
          display: { md: 'none' },
          bgcolor: 'primary.500',
          boxShadow: '0px 2px 6px -1px rgb(0 0 0 / 30%), 0px 4px 8px 0px rgb(0 0 0 / 24%), 0px 1px 10px 0px rgb(0 0 0 / 18%);',
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'black' }}>
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
            display: { xs: 'none', md: 'flex' },
            '& .MuiDrawer-paper': {
              bgcolor: 'primary.main',
              color: 'white',
              width: DRAWER.WIDTH,
              borderRight: 'none',
            },
            '& .MuiTypography-root': {
              textAlign: 'center',
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
