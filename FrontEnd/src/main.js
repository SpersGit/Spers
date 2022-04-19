import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/css/main.css'
import vSelect from 'vue-select'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueFormulate from '@braid/vue-formulate'

Vue.use(VueFormulate)


Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)

Vue.component('v-select', vSelect)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
