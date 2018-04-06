import HeaderComponent from './components/header/header.vue';
import FooterComponent from './components/footer/footer.vue';
export default {
   name: 'app',
   components: {
      HeaderComponent,
      FooterComponent
   },
   data: () => ({}),
   created() {
      this.$store.state.lang = 'ar'
      this.$store.state.title = 'كورتاب'
      this.$store.state.direction = 'rtl'
      $('html').attr({
         'lang': this.$store.state.lang,
         'dir': this.$store.state.direction
      })
   }
}
