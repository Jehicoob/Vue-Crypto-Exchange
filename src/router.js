// Esenciales para poder trabajar sobre con rutas
import Vue from "vue";
import Router from "vue-router";

// Importamos componentes
import Home from "@/views/Home";
import Error from "@/views/Error";
import About from "@/views/About";
import CoinDetail from "@/views/CoinDetail";

/* Vue 3 ---------------------------------------------------
import CoinDetail from "@/views/CoinDetail.vue";
--------------------------------------------------- Vue 3 */

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail,
    },
    {
      path: "*",
      name: "error",
      component: Error,
    },

    /* Vue 3 ------------------------------------------------
    {
      path: "/CoinDetail/:id(.*)",
      name: "Coin-Detail",
      component: CoinDetail,
    },
    {
      path: "/:catchAll(.*)",
      name: "error",
      component: Error,
    },
    Vue 3 -------------------------------------------------*/
  ],
});
