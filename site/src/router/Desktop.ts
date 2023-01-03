import { createWebHistory, createRouter } from "vue-router";
import Desktop from '../views/Desktop.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/',
          name: 'Desktop',
          component: Desktop,
        },
    ],
})

export default router
