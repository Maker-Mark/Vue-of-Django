import Vue from 'vue'
import App from './App.vue'
import BootstapVue from 'bootstrap-vue' 
import {ValidationProvider} from 'vee-validate';
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


Vue.use(BootstapVue)
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

