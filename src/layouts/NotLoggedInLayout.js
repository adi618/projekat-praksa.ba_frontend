import {
  Box,
  Typography,
  CardMedia,
  Button,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import authHeaderImage from '../assets/images/authHeaderImage.jpg';
import Footer from '../containers/Footer';

function NotLoggedInLayout() {
  const isWiderThanMd = useMediaQuery((theme) => theme.breakpoints.up('md'));
  return (
    <Box
      sx={(theme) => ({
        minHeight: '100%',
        bgcolor: 'primary.500',
        borderRadius: { md: '16px 0 0 0' },
        overflow: 'hidden',
        boxShadow: `0 0 0px 10px ${theme.palette.primary.main}`,
        pb: 10,
      })}
    >
      {isWiderThanMd ? (
        <Box
          sx={{
            bgcolor: 'primary.main',
            maxHeight: '200px',
            overflow: 'hidden',
            display: 'flex',
            position: 'relative',
          }}
        >
          <CardMedia
            component="img"
            image={authHeaderImage}
            sx={{ filter: 'brightness(70%)', opacity: '35%' }}
            alt="header"
          />
          <Box sx={{
            position: 'absolute',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100%',
            pl: 8,
          }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 'semiBold', pb: 2 }}
            >
              Prijavite se
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 'normal' }}
            >
              Hvala Vam što ste dio zajednice koja pruža priliku mladima.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 'normal' }}
            >
              Za mlade!
            </Typography>
          </Box>
        </Box>
      )
        : (
          <Box
            sx={(theme) => ({
              height: '15vh',
              width: '100%',
              bgcolor: 'primary.main',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: `0px 30px ${theme.palette.primary.main}`,
            })}
          >
            <Button
              // onClick={() => {}}
              // disabled={}
              sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
            >
              Tražiš praksu?
            </Button>
            <Button
              // onClick={() => {}}
              // disabled={}
              sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
            >
              Nudiš praksu?
            </Button>
          </Box>
        )}
      <Box
        sx={{
          minHeight: '100%',
          width: '100%',
          bgcolor: 'primary.500',
          borderRadius: '20px 20px 0 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: { xs: 'space-around', md: 'space-between' },
          alignItems: 'center',
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default NotLoggedInLayout;
