export default {
   name: 'HeaderComponent',
   components: {},
   data: () => ({
      navs: [],
      default_navs: [{
         dropdown: false,
         name: 'الرئيسية',
         url: '/'
      }, {
         dropdown: false,
         name: 'تسجيل الدخول',
         url: '/signin'
      }, {
         dropdown: false,
         name: 'حساب جديد',
         url: '/signup'
      }, {
         dropdown: false,
         name: 'المسارات',
         url: '/tracks'
      }, {
         dropdown: false,
         name: 'عن الموقع',
         url: '/about'
      }, {
         dropdown: false,
         name: 'إتصل بنا',
         url: '/contact'
      }, {
         dropdown: true,
         name: 'اللغات',
         children: [{
            name: 'العربية',
            url: ''
         }, {
            name: 'الإنجليزية',
            url: ''
         }, {
            name: 'الفرنسية',
            url: ''
         }]
      }],
      user_navs: [{
         dropdown: false,
         name: 'الرئيسية',
         url: '/tracks'
      }, {
         dropdown: false,
         name: 'الملف الشخصي',
         url: '/profile'
      }, {
         dropdown: false,
         name: 'عن الموقع',
         url: '/about'
      }, {
         dropdown: false,
         name: 'إتصل بنا',
         url: '/contact'
      }, {
         name: 'اللغات',
         dropdown: true,
         children: [{
            name: 'العربية',
            url: ''
         }, {
            name: 'الإنجليزية',
            url: ''
         }, {
            name: 'الفرنسية',
            url: ''
         }]
      }],
      admin_navs: [],
      title: '',
      fixed: true,
      direction: '',
      drawer: {
         width: 0,
         isOpen: false,
         isRight: false
      }
   }),
   created() {
      this.setHeader()
      this.title = this.$store.state.title
      this.drawer.width = window.innerWidth
      this.direction = this.$store.state.direction
      this.drawer.isRight = this.direction === 'rtl' ? true : false
   },
   watch: {
      $route(to, from) {
         this.setHeader()
      }
   },
   methods: {
      setHeader() {
         switch (this.$route.name) {
            case 'home':
            case 'about':
            case 'signin':
            case 'singup':
            case 'contact':
               this.fixed = false
               this.navs = this.default_navs;
               break;
            case 'tracks':
               if (this.$store.state.isLogin) {
                  this.navs = this.user_navs;
               } else {
                  this.navs = this.default_navs;
               }
               this.fixed = false
               break;
            case 'track':
               this.fixed = true
               this.navs = this.user_navs;
               break;
         }
      },
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
