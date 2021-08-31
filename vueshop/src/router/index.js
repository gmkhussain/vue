import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Cart from "@/views/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }
  ,
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;