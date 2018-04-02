import Vue from 'vue'
import App from './app.vue'
import jQuery from 'jquery'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import router from './router'
import store from './store/app.store'

global.$ = jQuery
global.jQuery = jQuery
Vue.config.productionTip = false
// import Vuetify material desing && customize theme
Vue.use(Vuetify, {
   theme: {
      primary: '#f44336',
      secondary: '#e57373',
      accent: '#9c27b0',
      error: '#f44336',
      warning: '#ffeb3b',
      info: '#2196f3',
      success: '#4caf50'
   }
})

new Vue({
   router,
   store,
   render: h => h(App)
}).$mount('#app')
