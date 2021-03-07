import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import DocDefault from './views/docs/index.vue';
import SwitchDemo from './views/docs/SwitchDemo.vue';
import ButtonDemo from './views/docs/ButtonDemo.vue';
import DialogDemo from './views/docs/DialogDemo.vue';
import TabsDemo from './views/docs/TabsDemo.vue';

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/doc', component: Doc, children: [
      {path: '', component: DocDefault},
      {path: 'switch', component: SwitchDemo},
      {path: 'button', component: ButtonDemo},
      {path: 'dialog', component: DialogDemo},
      {path: 'tabs', component: TabsDemo}
    ] },
  ],
});
