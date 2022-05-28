import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { NotLoggedInOutlet } from './outlets';
import { ROUTE_PATHS } from './constants';
import { verifyTokenUser } from './features/user';
import Home from './pages/Home';
import Post from './pages/Post';
import theme from './theme';
import SearchingForInternship from './pages/SearchingForInternship';
import OfferingInternship from './pages/OfferingInternship';
import Login from './pages/Login';
import Register from './pages/Register';
import NavigationLayout from './layouts/NavigationLayout';
import PostList from './pages/PostList';

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
        <Routes>
          <Route element={<NavigationLayout />}>
            <Route element={<NotLoggedInOutlet />}>
              <Route path={ROUTE_PATHS.HOME} element={<Home />} exact />
              <Route
                path={ROUTE_PATHS.SEARCHING_FOR_INTERNSHIP}
                element={<SearchingForInternship />}
                exact
              />
              <Route
                path={ROUTE_PATHS.OFFERING_INTERNSHIP}
                element={<OfferingInternship />}
                exact
              />
              <Route path={ROUTE_PATHS.LOGIN} element={<Login />} exact />
              <Route path={ROUTE_PATHS.REGISTER} element={<Register />} exact />
            </Route>
            <Route path={ROUTE_PATHS.POST_LIST} element={<PostList />} exact />
            <Route path={`${ROUTE_PATHS.POST}/:postId`} element={<Post />} exact />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
