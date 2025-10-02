import axios from 'axios';

const envBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');

const http = axios.create({
  baseURL: envBaseUrl || '/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
  }
});

http.interceptors.request.use((config) => {
  return config;
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default http; 