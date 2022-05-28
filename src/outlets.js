import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import NotLoggedInLayout from './layouts/NotLoggedInLayout';
import { ROUTE_PATHS } from './constants';

export function NotLoggedInOutlet() {
  const userData = useSelector((state) => state.user);

  return !userData.isLoggedIn ? <NotLoggedInLayout /> : <Navigate to={ROUTE_PATHS.HOME} />;
}
