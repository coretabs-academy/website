import {
   mapActions
} from 'vuex'
export default {
   name: 'home',
   components: {},
   data: () => ({
      src: '',
      gradient: '#5400ffcc, #ca3e4bcc'
   }),
   created() {
      this.$store.dispatch('getImgUrl', 'home_background.jpg').then(img => {
         this.src = img
      }).catch(error => {
         throw new Error(error.message);
      })
   },
   computed: {

   },
   methods: {}
}
