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
import ProfileComponent from './components/profile/profile.vue'
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
      name: '404',
      path: '/404',
      component: NotFoundComponent
   }, {
      path: '*',
      redirect: '/404'
   }, {
      name: 'tracks',
      path: '/tracks',
      component: TracksComponent
   }, {
      name: 'track',
      path: '/tracks/:track',
      component: TrackComponent
   }, {
      path: '/tracks/:track/:course',
      redirect: '/tracks/:track/:course/1'
   }, {
      name: 'courses',
      component: CoursesComponent,
      path: '/tracks/:track/:course/:number'
   }, {
      name: 'profile',
      path: '/profile',
      component: ProfileComponent
   }]
})
