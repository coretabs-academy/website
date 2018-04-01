import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const appStore = new Vuex.Store({
   state: {},
   mutations: {},
   actions: {
      getImgUrl: (img) => {
         console.log('img', img)
         return require(`@/assets/multimedia/images/${img}`)
      }
   }
})
