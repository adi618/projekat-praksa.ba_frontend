import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useEffect, useState } from 'react';

import { LoggedInOutlet, NavigationOutlet, NotLoggedInOutlet } from './outlets';
import { ROUTE_PATHS } from './constants';
import { tokenMissing, verifyTokenUser } from './features/user';
import Home from './pages/Home';
import Post from './pages/Post';
import theme from './theme';
import SearchingForInternship from './pages/SearchingForInternship';
import OfferingInternship from './pages/OfferingInternship';
import Login from './pages/Login';
import Register from './pages/Register';
import PostList from './pages/PostList';
import Company from './pages/Company';
import PageNotFound from './pages/PageNotFound';
import MyProfile from './pages/MyProfile';
import Loader from './components/Loader';

function App() {
  const [token] = useState(localStorage.getItem('token'));
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  useEffect(() => {
    if (token) {
      dispatch(verifyTokenUser(token));
    } else {
      dispatch(tokenMissing());
    }
  }, [dispatch, token]);

  if (userData.isLoading) {
    return <Box sx={{ height: '100vh' }}><Loader /></Box>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<NavigationOutlet />}>
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
            <Route path={`${ROUTE_PATHS.COMPANY}/:companyId`} element={<Company />} exact />
            <Route element={<LoggedInOutlet />}>
              <Route path={`${ROUTE_PATHS.MY_PROFILE}`} element={<MyProfile />} exact />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
