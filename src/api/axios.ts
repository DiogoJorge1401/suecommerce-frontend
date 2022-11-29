import axios from 'axios';

export const publicRequest = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const authenticatedRequest = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
});

export const setAuthorizationToken = () => {
  authenticatedRequest.interceptors.request.use((r) => {
    r.headers = {
      authorization: `Bearer ${localStorage.getItem('access_token')}`,
    };
  });
};
