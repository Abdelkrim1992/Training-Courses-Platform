import axios from 'axios';


const http = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json, multipart/form-data',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
});

export default http; 