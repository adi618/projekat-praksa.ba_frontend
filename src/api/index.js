import axios from 'axios';
import { BACKEND_HOST } from '../constants';

const API = axios.create({ baseURL: `${BACKEND_HOST}/api` });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  return req;
});

export const signIn = (formData) => API.post('/login', formData);
export const signUp = (formData) => API.post('/register', formData);
export const verifyToken = (token) => API.get('/verify-token', token);
export const getPosts = () => API.get('/posts');
export const getPost = (postId) => API.get(`/posts/${postId}`);
export const getCompany = (id) => API.get(`/companies/${id}`);
export const getPostsByCompanyId = (companyId) => API.get(`/posts?id=${companyId}`);
export const createPost = (data) => API.post('/posts', data);
