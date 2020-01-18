import Vue from 'vue'
import App from './App.vue'
import BootstapVue from 'bootstrap-vue' 
import VeeValidate from 'vee-validate'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


Vue.use(BootstapVue)
Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

