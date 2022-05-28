import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { DRAWER } from '../constants';

function NavigationLayout() {
  return (
    <>
      <Box
        sx={{
          height: '100vh',
          width: { md: `calc(100% - ${DRAWER.WIDTH})` },
          ml: { md: `${DRAWER.WIDTH}` },
        }}
      >
        <Outlet />
      </Box>
      <Navigation />
    </>
  );
}

export default NavigationLayout;
