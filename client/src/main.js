import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index.js'
import store from './store'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import 'bootstrap-vue/src/index.scss'
//import "../node_modules/bootstrap/scss/bootstrap.scss";

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
