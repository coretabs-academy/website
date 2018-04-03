import {
   mapActions
} from 'vuex'
export default {
   name: 'HomeComponent',
   components: {},
   data: () => ({
      src: '',
      height: 0,
      gradient: '#5400ffcc, #ca3e4bcc'
   }),
   created() {
      this.$store.dispatch('getImgUrl', 'home_background.jpg').then(img => {
         this.src = img
      }).catch(error => {
         throw new Error(error.message);
      })
      // this.height = window.innerHeight
   },
   computed: {

   },
   methods: {}
}
