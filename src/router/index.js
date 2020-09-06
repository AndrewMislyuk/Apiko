import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/v-login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/v-register.vue"),
  },
  {
    path: "/create",
    name: "create",
    component: () => import("../views/v-create.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("../views/v-home.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
