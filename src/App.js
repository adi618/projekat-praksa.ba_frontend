import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Footer from './containers/Footer';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Post from './pages/Post';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100vh',
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/zapocni" exact element={<Auth />} />
            <Route path="/praksa:id" exact element={<Post />} />
            <Route path="/*" element={<Navigate replace to="/" />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
