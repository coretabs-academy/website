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
      this.$store.state.direction = 'rtl'
      this.$store.state.title = 'Coretabs'
      $('html')
         .css('direction', this.$store.state.direction)
         .attr('direction', this.$store.state.direction)
   },
   computed: {

   },
   methods: {}
}
