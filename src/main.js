import './bootstrap';
import {createApp} from 'vue';
import App from './components/App.vue';
import Router from './routes/Router.js';
import VueFroala from 'vue-froala-wysiwyg';
import { createPinia } from 'pinia';
import './firebase';

const app = createApp(App);

app.use(Router)
   .use(createPinia())
   .use(VueFroala)
   .mount('#app');

document.getElementById('loading').classList.add('d-none');