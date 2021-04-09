import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Auth from "../views/Auth.vue";
import Form from "../views/Form.vue";
import Crud from "../views/Crud.vue";
import Blog from "../views/templates/Blog";

let routes = [
  { path: "/home", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/auth", name: "Auth", component: Auth },
  { path: "/form", name: "Form", component: Form },
  { path: "/crud", name: "Crud", component: Crud },

  { path: "/blog", name: "Blog", component: Blog },
  { path: "/blog/:id",  name: "Post", component: () => import("../views/templates/Post") }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
