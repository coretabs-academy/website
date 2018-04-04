export default {
   name: 'HeaderComponent',
   components: {},
   data: () => ({
      navs: [],
      title: '',
      right: '',
      fixed: false,
      drawer: {
         width: 0,
         isOpen: false,
         isRight: false
      }
   }),
   created() {
      switch (this.$route.name) {
         case 'home':
            this.navs = [{
               url: '/',
               route: true,
               name: 'تسجيل'
            }, {
               route: false,
               name: 'المنتدى',
               url: 'https://forums.coretabs.net'
            }]
            break;
      }
      this.title = this.$store.state.title
      this.drawer.width = window.innerWidth
      this.drawer.isRight = this.$store.state.direction === 'rtl' ? true : false
   },
   methods: {
      openDrawer() {
         this.drawer.isOpen = true;
      },
      closeDrawer() {
         this.drawer.isOpen = false;
      }
   }
}
