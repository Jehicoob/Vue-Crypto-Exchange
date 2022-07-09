import Vue from "vue";
import App from "./App.vue";

//tailwind
import "@/assets/css/tailwind.css"; //Importamos el tailwind para poder usarlo en el proyecto

//router
import router from "@/router";

//filtros
import { dollarFilter, percentFilter } from "@/filters"; // Importamos el filtro de dolar desde el archivo filters.js
//import { Chart } from "chart.js";

//Librerias
import Chartkick from "vue-chartkick"; // Grafico
import { Chart } from "chart.js"; // Grafico
import { VueSpinners } from "@saeris/vue-spinners"; // Transicion -> la utilizamosen el archivo Home.vue

//Le decimos a vue que utilice los filtros
//Para poder usar este filtro llamamos a la funcion de Vue llamada *filter*
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);

//Le decimos a vue que utilice las librerias
Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart));

/* Vue 3 -----------------------------------------------------------------------------------------

import  { createApp } from "vue";
import filters from "@/filters";

const app = createApp(App).use(router)
app.config.globalProperties.$filters = filters
app.mount("#app");

Vue 3 ----------------------------------------------------------------------------------------- */

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

//$mount("#app"); Cumple la misma funcion que el elemento el: basico

/*
Real
render: function (createElement) {
  return createElement(App);
}
short
render: function (h) {
  return h(App);
}
more short
render: h => h (App)
*/
