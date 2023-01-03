import { createWebHistory, createRouter } from "vue-router";
import Tech from '../views/Tech.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/',
          name: 'Tech',
          component: Tech,
        },
    ],
})

export default router
