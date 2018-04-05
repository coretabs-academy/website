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
      // this.$store.state.title = 'Coretabs'
      this.$store.state.title = 'كورتاب'
      $('html').css('direction', this.$store.state.direction)
   },
   mounted() {
      // $('main.content').css({
      //    'margin-top': `${$('header .toolbar').hasClass('toolbar--fixed') ? $('header .toolbar__content').height(): $('header .toolbar__content').height() * -1}px`
      // })
   },
   computed: {

   },
   methods: {}
}
