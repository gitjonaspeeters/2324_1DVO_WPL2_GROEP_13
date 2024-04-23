import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import MainView from "../views/Main.vue";
import TeampageView from "../views/TeampageView.vue";
import CategorieView from "../views/CategorieView.vue";
import RuimtesView from "../views/RuimtesView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/categorie",
      name: "categorie",
      component: CategorieView,
    },
    {
      path: "/ruimtes",
      name: "ruimtes",
      component: RuimtesView,
    },
    {
      path: "/",
      name: "main",
      component: MainView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/teampage",
      name: "teampage",
      component: TeampageView,
    },
  ],
});

export default router;
