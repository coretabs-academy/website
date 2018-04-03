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
      primary: '#7b1fa2',
      secondary: '#bdbdbd',
      accent: '#ba68c8',
      error: '#ff6d00',
      warning: '#ffd600',
      info: '#2196f3',
      success: '#7cb342'
   }
})

new Vue({
   router,
   store,
   render: h => h(App)
}).$mount('#app')
