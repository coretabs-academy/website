import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      lang: '',
      title: '',
      direction: '',
      isLogin: false
   },
   mutations: {},
   actions: {
      getImgUrl(state, img) {
         return require(`@/assets/multimedia/${img}`)
      }
   }
})
