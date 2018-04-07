export default {
   name: 'HeaderComponent',
   components: {},
   data: () => ({
      navs: [{
         active: true,
         dropdown: false,
         name: 'الرئيسية',
         url: '/'
      }, {
         active: true,
         dropdown: false,
         name: 'تسجيل الدخول',
         url: '/signin'
      }, {
         active: true,
         dropdown: false,
         name: 'حساب جديد',
         url: '/signup'
      }, {
         active: true,
         dropdown: false,
         name: 'عن الموقع',
         url: '/about'
      }, {
         active: true,
         dropdown: false,
         name: 'إتصل بنا',
         url: '/contact'
      }, {
         active: true,
         dropdown: true,
         name: 'اللغات',
         children: [{
            active: true,
            name: 'العربية',
            url: ''
         }, {
            active: true,
            name: 'الإنجليزية',
            url: ''
         }, {
            active: true,
            name: 'الفرنسية',
            url: ''
         }]
      }],
      title: '',
      fixed: false,
      direction: '',
      drawer: {
         width: 0,
         isOpen: false,
         isRight: false
      }
   }),
   created() {
      this.title = this.$store.state.title
      this.drawer.width = window.innerWidth
      this.direction = this.$store.state.direction
      this.drawer.isRight = this.direction === 'rtl' ? true : false
   },
   watch: {
      $route(to, from) {
         switch (this.$route.name) {
            case 'home':
            case 'about':
            case 'signin':
            case 'singup':
            case 'contact':
               this.navs = [{
                  active: true,
                  dropdown: false,
                  name: 'الرئيسية',
                  url: '/'
               }, {
                  active: true,
                  dropdown: false,
                  name: 'تسجيل الدخول',
                  url: '/signin'
               }, {
                  active: true,
                  dropdown: false,
                  name: 'حساب جديد',
                  url: '/signup'
               }, {
                  active: true,
                  dropdown: false,
                  name: 'عن الموقع',
                  url: '/about'
               }, {
                  active: true,
                  dropdown: false,
                  name: 'إتصل بنا',
                  url: '/contact'
               }, {
                  active: true,
                  dropdown: true,
                  name: 'اللغات',
                  children: [{
                     active: true,
                     name: 'العربية',
                     url: ''
                  }, {
                     active: true,
                     name: 'الإنجليزية',
                     url: ''
                  }, {
                     active: true,
                     name: 'الفرنسية',
                     url: ''
                  }]
               }]
               break;
            case 'track':
               this.navs = [{
                  active: true,
                  dropdown: false,
                  name: 'الرئيسية',
                  url: '/tracks'
               }, {
                  active: true,
                  dropdown: false,
                  name: '',
                  url: ''
               }, {
                  active: true,
                  dropdown: false,
                  name: 'عن الموقع',
                  url: '/about'
               }, {
                  active: true,
                  dropdown: false,
                  name: 'إتصل بنا',
                  url: '/contact'
               }, {
                  dropdown: true,
                  active: true,
                  name: 'اللغات',
                  children: [{
                     active: true,
                     name: 'العربية',
                     url: ''
                  }, {
                     active: true,
                     name: 'الإنجليزية',
                     url: ''
                  }, {
                     active: true,
                     name: 'الفرنسية',
                     url: ''
                  }]
               }]
               this.fixed = true
               break;
         }
      }
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
