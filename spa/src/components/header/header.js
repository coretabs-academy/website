export default {
   name: 'HeaderComponent',
   components: {},
   data: () => ({
      title: '',
      fixed: false,
      navs: [{
         name: 'المنتدى',
         url: ''
      }, {
         name: 'تسجيل',
         url: ''
      }]
   }),
   created() {
      this.title = this.$store.state.title
   }
}
