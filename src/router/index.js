import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";


import CategorieView from "../views/CategorieView.vue";
import RuimtesView from "../views/RuimtesView.vue";



import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import AccountView from "../views/AccountView.vue";


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
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/account",
      name: "account",
      component: AccountView,
    },
  ],
});

export default router;
