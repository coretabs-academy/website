import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from './components/home/home.vue'
import AboutComponent from './components/about/about.vue'
import TrackComponent from './components/track/track.vue'
import SignInComponent from './components/signin/signin.vue'
import SignUpComponent from './components/signup/signup.vue'
import TracksComponent from './components/tracks/tracks.vue'
import ContactComponent from './components/contact/contact.vue'
import CoursesComponent from './components/courses/courses.vue'
import NotFoundComponent from './components/not-found/not-found.vue'

Vue.use(Router)

export default new Router({
   mode: 'history',
   // mode: 'hash',
   routes: [{
      path: '/',
      name: 'home',
      component: HomeComponent
   }, {
      path: '/home',
      redirect: '/'
   }, {
      name: 'signin',
      path: '/signin',
      component: SignInComponent
   }, {
      name: 'signup',
      path: '/signup',
      component: SignUpComponent
   }, {
      name: 'about',
      path: '/about',
      component: AboutComponent
   }, {
      name: 'contact',
      path: '/contact',
      component: ContactComponent
   }, {
      path: '/404',
      name: '404',
      component: NotFoundComponent
   }, {
      path: '/tracks',
      name: 'tracks',
      component: TracksComponent
   }, {
      path: '/tracks/:track',
      name: 'track',
      component: TrackComponent
   }, {
      path: '/tracks/:track/:course',
      name: 'tracks-courses',
      component: CoursesComponent
   }, {
      path: '/tracks/:track/:course/:number',
      name: 'tracks-courses-number',
      components: {
         courses: CoursesComponent
      }
   }]
})
