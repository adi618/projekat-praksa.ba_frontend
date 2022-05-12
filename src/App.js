import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { BrowserRouter, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import { DRAWER } from './constants';
import getRoutes from './routes';
import theme from './theme';

function App() {
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
