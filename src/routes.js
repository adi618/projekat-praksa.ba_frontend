import { Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Post from './pages/Post';

export const ROUTE_PATHS = {
  HOME: '/',
  AUTH: '/pocetna',
  POST: '/praksa:id',
};

export const ROUTES = [
  { path: ROUTE_PATHS.HOME, element: <Home />, exact: true },
  { path: ROUTE_PATHS.AUTH, element: <Auth />, exact: true },
  { path: ROUTE_PATHS.POST, element: <Post />, exact: true },
];

export default ROUTES.map(({ path, element, exact }) => (
  <Route
    path={path}
    element={element}
    exact={exact}
    key={path}
  />
));
