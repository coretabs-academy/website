import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from './components/home/home.vue'
import ContributorsComponent from './components/contributors/contributors.vue'

Vue.use(Router)

export default new Router({
   history: true,
   routes: [{
      path: '/',
      name: 'home',
      component: HomeComponent
   }, {
      path: '/contributors',
      name: 'contributors',
      component: ContributorsComponent
   }]
})
