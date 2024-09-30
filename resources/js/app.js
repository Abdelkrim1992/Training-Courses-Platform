import './bootstrap';
import {createApp} from 'vue';
import App from './components/App.vue';
import Router from './routes/Router.js';
import '@fortawesome/fontawesome-free/css/all.css';

createApp(App).use(Router).mount('#app');
