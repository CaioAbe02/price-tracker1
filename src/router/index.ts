import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AllProducts from '../components/AllProducts.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/products',
    name: 'AllProducts',
    component: AllProducts,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;