import './bootstrap';
import {createApp} from 'vue';
import App from './components/App.vue';
import Router from './routes/Router.js';

createApp(App).use(Router).mount('#app');
