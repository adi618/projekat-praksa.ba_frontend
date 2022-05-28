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
import { DRAWER, ROUTE_PATHS } from '../constants';
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
        <ListItemButton onClick={() => navigate(ROUTE_PATHS.HOME)}>
          <ListItemText
            primaryTypographyProps={{ variant: 'h5', fontWeight: 'extraBold' }}
            primary="Praksa.ba"
          />
        </ListItemButton>
        <ListItemButton onClick={() => navigate(ROUTE_PATHS.POST_LIST)}>
          <ListItemText primary="Početna" />
        </ListItemButton>
      </List>
      <List>
        {/* <ListItem>
          <ListItemText
            primary={userData.isLoggedIn ? userData.user.companyName : 'Kompanija ste?'}
            primaryTypographyProps={{ variant: 'h6', fontWeight: 'medium' }}
          />
        </ListItem> */}
        {userData.isLoggedIn
          ? (
            <ListItemButton onClick={() => dispatch(logout())}>
              <ListItemText primary="Odjavite se" />
            </ListItemButton>
          ) : (
            <>
              <ListItemButton onClick={() => {
                navigate(ROUTE_PATHS.SEARCHING_FOR_INTERNSHIP);
              }}
              >
                <ListItemText primary="Tražiš praksu?" />
              </ListItemButton>
              <Divider sx={{ bgcolor: 'white', mx: 4 }} />
              <ListItemButton onClick={() => {
                navigate(ROUTE_PATHS.OFFERING_INTERNSHIP);
              }}
              >
                <ListItemText primary="Nudiš praksu?" />
              </ListItemButton>
              <ListItemButton onClick={() => {
                navigate(ROUTE_PATHS.LOGIN);
              }}
              >
                <ListItemText primary="Prijavite se" />
              </ListItemButton>
              <ListItemButton onClick={() => {
                navigate(ROUTE_PATHS.REGISTER);
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
