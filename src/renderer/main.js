import Vue from 'vue'

import App from './App'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false
Vue.use(VueParticles)
/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')
