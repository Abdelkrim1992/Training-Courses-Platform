import http from './api/http';
window.axios = http;

http.defaults.withCredentials = true;
http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';