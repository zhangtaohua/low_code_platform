import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home.vue"),
  },
  // pathMatch is the name of the param, e.g., going to /not/found yields
  // { params: { pathMatch: ['not', 'found'] }}
  // this is thanks to the last *, meaning repeated params and it is necessary if you
  // plan on directly navigating to the not-found route using its name
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    redirect: "/homemap",
  },
  // if you omit the last `*`, the `/` character in params will be encoded when resolving or pushing
  {
    path: "/:pathMatch(.*)",
    name: "bad-not-found",
    redirect: "/homemap",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
