import { createWebHistory, createRouter } from "vue-router";

let routes = [
  { path: "/about", name: "About", component:() => import("../components/Home") },
  { path: "/contact",  name: "Contact", component:() => import("../components/Home") }
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });

export default router;
