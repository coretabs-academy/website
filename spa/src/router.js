import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from './components/home/home.vue'

Vue.use(Router)

export default new Router({
   routes: [{
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent
   }]
})
