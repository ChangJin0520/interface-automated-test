import { createWebHistory, createRouter } from 'vue-router';
import { routes } from './route.config';

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
