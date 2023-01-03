import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import KakulSaydonView from "../views/KakulSaydonCheatsheet.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/kakul-saydon",
      name: "kakul-saydon",
      component: KakulSaydonView,
    },
  ],
});

export default router;
