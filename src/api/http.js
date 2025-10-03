import axios from 'axios';


const http = axios.create({
  baseURL: 'https://training-courses-backend-6jkbrp.laravel.cloud/api',
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json, multipart/form-data',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
});

export default http; 