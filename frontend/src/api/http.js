import axios from 'axios';


const http = axios.create({
  baseURL: 'https://training-courses-backend-6jkbrp.laravel.cloud/api',
  withCredentials: false,
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