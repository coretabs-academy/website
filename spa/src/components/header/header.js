export default {
   name: 'HeaderComponent',
   components: {},
   data: () => ({
      navs: [],
      default_navs: [{
         url: '/',
         dropdown: false,
         name: 'الرئيسية'
      }, {
         url: '/signin',
         dropdown: false,
         name: 'تسجيل الدخول'
      }, {
         url: '/signup',
         dropdown: false,
         name: 'حساب جديد'
      }, {
         url: '/tracks',
         dropdown: false,
         name: 'المسارات'
      }, {
         url: '/about',
         dropdown: false,
         name: 'عن الموقع'
      }, {
         url: '/contact',
         dropdown: false,
         name: 'إتصل بنا'
      }, {
         name: 'اللغات',
         dropdown: true,
         children: [{
            url: '',
            name: 'العربية'
         }, {
            url: '',
            name: 'الإنجليزية'
         }, {
            url: '',
            name: 'الفرنسية'
         }]
      }],
      user_navs: [{
         url: '/tracks',
         dropdown: false,
         name: 'الرئيسية'
      }, {
         url: '/profile',
         dropdown: false,
         name: 'الملف الشخصي'
      }, {
         url: '/about',
         dropdown: false,
         name: 'عن الموقع'
      }, {
         url: '/contact',
         dropdown: false,
         name: 'إتصل بنا'
      }, {
         name: 'اللغات',
         dropdown: true,
         children: [{
            url: '',
            name: 'العربية'
         }, {
            url: '',
            name: 'الإنجليزية'
         }, {
            url: '',
            name: 'الفرنسية'
         }]
      }, {
         url: '',
         name: 'خروج',
         dropdown: false
      }],
      admin_navs: [],
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
            case 'signin':
            case 'singup':
               this.navs = this.default_navs;
               break;
            case '404':
            case 'about':
            case 'tracks':
            case 'contact':
               if (!this.$store.state.isLogin) {
                  this.navs = this.user_navs;
               } else {
                  this.navs = this.default_navs;
               }
               break;
            case 'track':
            case 'profile':
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
