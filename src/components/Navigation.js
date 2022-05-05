import React, { useState } from 'react';
import {
  AppBar,
  Button,
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
import { DRAWER } from '../constants';

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <ListItemButton component="a" href="/">
          <ListItemText primary="Početna" />
        </ListItemButton>
        <ListItemButton>
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
        <ListItemButton>
          <ListItemText primary="Prijavite se" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Registrujte se" />
        </ListItemButton>
      </List>
    </>
  );

  return (
    <>
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
