import { createWebHistory, createRouter } from "vue-router";
import Test from '../views/Test.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/',
          name: 'Test',
          component: Test,
        },
    ],
})

export default router
