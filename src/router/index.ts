import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes = [
  {
    path: "/copy",
    name: "Copy",
    component: () => import("../views/CopyView.vue"),
  },
  {
    path: "/save",
    name: "Save",
    component: () => import("../views/SaveView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
