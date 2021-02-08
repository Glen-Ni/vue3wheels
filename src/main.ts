import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { createWebHashHistory, createRouter } from 'vue-router';
import Fuck from './components/Fuck.vue';
import Fuck2 from './components/Fuck2.vue';

const history =  createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Fuck},
    {path: '/fuck', component: Fuck2},
  ]
})

const app = createApp(App);
app.use(router);
app.mount('#app');
