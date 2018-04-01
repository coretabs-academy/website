import Vue from 'vue'
import App from './app.vue'
import router from './router'
import Vuetify from 'vuetify'
import jQuery from 'jquery';
import 'vuetify/dist/vuetify.min.css'

global.$ = jQuery
global.jQuery = jQuery
Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
   router,
   render: h => h(App)
}).$mount('#app')
