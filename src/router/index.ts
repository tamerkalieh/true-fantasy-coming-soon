import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/index.vue"),
  },
  {
    path: "/imprint",
    name: "imprint",
    component: () => import("../pages/imprint.vue"),
    alias: ["/impressum"],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
