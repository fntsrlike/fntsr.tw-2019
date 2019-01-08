import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import 'han-css/dist/han.css'
import 'han-css/dist/han.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
