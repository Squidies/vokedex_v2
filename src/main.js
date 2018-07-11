import 'promise-polyfill/src/polyfill'
import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import filters from './filters'

Vue.config.productionTip = false
Vue.use(filters)

new Vue({
  store,
  render: h => h(App)
}).$mount('#Vokedex')
