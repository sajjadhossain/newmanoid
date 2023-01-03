import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Desktop from "../views/Desktop.vue";
import Tech from "../views/Tech.vue";
import Test from "../views/Test.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/desktop",
    name: "Desktop",
    component: Desktop,
  },
  {
    path: "/tech",
    name: "Tech",
    component: Tech,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;