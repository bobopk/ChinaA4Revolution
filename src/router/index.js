import { createWebHistory, createRouter } from "vue-router";
import TimeMap from "../components/TimeMap.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: TimeMap,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

