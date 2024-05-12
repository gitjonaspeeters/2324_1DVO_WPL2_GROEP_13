import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";


import CategorieView from "../views/CategorieView.vue";
import RuimtesView from "../views/RuimtesView.vue";
import CartView from "../views/WinkelwagenView.vue";



import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import AccountView from "../views/AccountView.vue";
import DetailView from "@/views/DetailView.vue";
import WichlistView from "@/views/WishlistView.vue";


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
    {

      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/product",
      name: "product",
      component: DetailView,
    },{
    path: "/wishlist",
    name: "wishlist",
    component: WichlistView,
  },
  ],
});

export default router;
