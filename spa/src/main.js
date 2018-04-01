import Vue from 'vue'
import App from './app.vue'
import jQuery from 'jquery'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import router from './router'
import {
   appStore
} from './store/app.store'

global.$ = jQuery
global.jQuery = jQuery
Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
   router,
   appStore,
   render: h => h(App)
}).$mount('#app')
