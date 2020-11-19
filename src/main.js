import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './routes.js'

axios.defaults.baseURL = " ";
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
