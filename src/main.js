import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faWordpress, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faEnvelope,
  faPlus,
  faMinus,
  faGithub,
  faWordpress,
  faFacebookSquare,
  faLinkedin
)

Vue.use(VueScrollTo)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
