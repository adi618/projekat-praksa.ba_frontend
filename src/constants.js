export const BACKEND_HOST = 'http://localhost:5000';

export const REGEX = {
  EMAIL: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const DRAWER = {
  WIDTH: '280px',
};

export const ROUTE_PATHS = {
  HOME: '/',
  POST: '/praksa',
  POST_LIST: '/prakse',
  COMPANY: '/firma',
  SEARCHING_FOR_INTERNSHIP: '/trazis-praksu',
  OFFERING_INTERNSHIP: '/nudis-praksu',
  LOGIN: '/prijava',
  REGISTER: '/registracija',
};

export const AUTHENTICATION_TYPE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export const SNACKBAR_VARIANTS = {
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESS: 'success',
};
