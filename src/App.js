import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import { DRAWER } from './constants';
import { verifyTokenUser } from './features/user';
import getRoutes from './routes';
import theme from './theme';

function App() {
  const dispatch = useDispatch();

  const token = localStorage.getItem('token');

  if (token) {
    dispatch(verifyTokenUser(token));
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box
          sx={{
            height: '100vh',
            width: { md: `calc(100% - ${DRAWER.WIDTH})` },
            ml: { md: `${DRAWER.WIDTH}` },
          }}
        >
          <Routes>
            {getRoutes}
          </Routes>
        </Box>
        <Navigation />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
