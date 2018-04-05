export default {
   name: 'HeaderComponent',
   components: {},
   data: () => ({
      navs: [{
         active: true,
         name: 'الرئيسية',
         url: '/'
      }, {
         active: true,
         name: 'دخول',
         url: '/signin'
      }, {
         active: true,
         name: 'حساب جديد',
         url: '/signup'
      }, {
         active: true,
         name: 'عن الموقع',
         url: '/about'
      }, {
         active: true,
         name: 'إتصل بنا',
         url: '/contact'
      }],
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
      this.title = this.$store.state.title
      this.drawer.width = window.innerWidth
      this.drawer.isRight = this.$store.state.direction === 'rtl' ? true : false
      // switch (this.$route.name) {
      //    case 'home':
      //       this.navs = [{
      //          name: 'الرئيسية',
      //          url: '/'
      //       }, {
      //          name: 'دخول',
      //          url: '/signin'
      //       }, {
      //          name: 'حساب جديد',
      //          url: '/signup'
      //       }, {
      //          name: 'عن الموقع',
      //          url: '/about'
      //       }, {
      //          name: 'إتصل بنا',
      //          url: '/contact'
      //       }]
      //       break;
      //    case 'contributors':
      //       this.navs = []
      //       this.fixed = true
      //       break;
      // }
   },
   methods: {
      openDrawer() {
         this.drawer.isOpen = true;
      },
      closeDrawer() {
         this.drawer.isOpen = false;
      },
      onScroll(e) {
         if (window.pageYOffset || document.documentElement.scrollTop > 0) {
            this.fixed = true;
         } else {
            this.fixed = false;
         }
      }
   }
}
