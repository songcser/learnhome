import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import i18n from './i18n'
import router from './router'

import './styles/index.scss'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
