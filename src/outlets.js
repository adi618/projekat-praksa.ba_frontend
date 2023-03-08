import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import NotLoggedInLayout from './layouts/NotLoggedInLayout';
import { ROUTE_PATHS } from './constants';
import NavigationLayout from './layouts/NavigationLayout';

export function NotLoggedInOutlet() {
  const userData = useSelector((state) => state.user);

  return !userData.isLoggedIn ? <NotLoggedInLayout /> : <Navigate to={ROUTE_PATHS.POST_LIST} />;
}

export function LoggedInOutlet() {
  const userData = useSelector((state) => state.user);

  return userData.isLoggedIn ? <Outlet /> : <Navigate to={ROUTE_PATHS.LOGIN} />;
}

export function NavigationOutlet() {
  return <NavigationLayout />;
}
