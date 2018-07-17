import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import 'babel-polyfill'

import i18n from './i18n'
import router from './router'

import './styles/index.css'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
