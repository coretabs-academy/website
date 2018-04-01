import {
   mapActions
} from 'vuex'
export default {
   name: 'home',
   components: {},
   data: () => ({
      src: '',
      gradient: 'linear-gradient(rgba(84, 0, 255, 0.8), rgba(202, 62, 75, 0.8))'
   }),
   created: () => {
      // this.$store.commit('getImgUrl', 'home_background.jpg')
   },
   methods: {}
}
