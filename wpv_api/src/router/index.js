import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Crud from "../views/Crud.vue";

let routes = [
  { path: "/home", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/crud", name: "Crud", component: Crud }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
