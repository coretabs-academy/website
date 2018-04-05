import Vue from 'vue'
import App from './app.vue'
import jQuery from 'jquery'
import Vuetify from 'vuetify'
import router from './router'
import store from './store/app.store'

global.$ = jQuery
global.jQuery = jQuery
Vue.config.productionTip = false
// User Vuetify material desing && customize own theme
Vue.use(Vuetify, {
   theme: {
      primary: '#3f51b5',
      secondary: '#e0e0e0',
      accent: '#ff4081',
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
