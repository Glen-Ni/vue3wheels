import { createApp } from 'vue';
import App from './App.vue';
import './libs/hao.scss';
import './index.scss';
import { router } from './router';


const app = createApp(App);
app.use(router);
app.mount('#app');
