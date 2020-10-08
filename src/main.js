import Vue from "vue";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes"; 

Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes, // Same as "routes: routes”
  mode: "history" // No hash tag style in URL
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
