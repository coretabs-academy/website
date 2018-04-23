export default {
   name: 'HeaderComponent',
   components: {},
   data: () => ({
      navs: [],
      logo: '',
      show: true,
      currentClass: '',
      default_navs: [{
            url: '/',
            dropdown: false,
            name: 'الرئيسية'
         },
         //  {
         //    url: '/signin',
         //    dropdown: false,
         //    name: 'تسجيل الدخول'
         // }, {
         //    url: '/signup',
         //    dropdown: false,
         //    name: 'حساب جديد'
         // }, {
         //    url: '/tracks',
         //    dropdown: false,
         //    name: 'المسارات'
         // },
         {
            url: '/about',
            dropdown: false,
            name: 'عن الموقع'
         }, {
            url: '/contact',
            dropdown: false,
            name: 'إتصل بنا'
         }
         // {
         //    name: 'اللغات',
         //    dropdown: true,
         //    children: [{
         //       url: '',
         //       name: 'العربية'
         //    }, {
         //       url: '',
         //       name: 'الإنجليزية'
         //    }, {
         //       url: '',
         //       name: 'الفرنسية'
         //    }]
         // }
      ],
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
      drawer: {
         width: 0,
         isOpen: false,
         isRight: false
      }
   }),
   created() {
      this.setHeader()
      this.$store.dispatch('getImgUrl', 'icons/icon.jpg').then(img => {
         this.logo = img
      }).catch(error => {
         throw new Error(error.message)
      })
      this.title = this.$store.state.title
      this.drawer.width = window.innerWidth
      this.drawer.isRight = this.$store.state.direction === 'rtl'
   },
   watch: {
      $route(to, from) {
         this.setHeader()
         let el = document.querySelector('main.content')
         el.className = ''
         el.classList.add('content')
         el.classList.add(this.currentClass)
      }
   },
   mounted() {
      let el = document.querySelector('main.content')
      el.className = ''
      el.classList.add('content')
      el.classList.add(this.currentClass)
   },
   methods: {
      setHeader() {
         this.currentClass = `${this.$route.name}-main-content`
         switch (this.$route.name) {
            case 'home':
            case 'signin':
            case 'singup':
               this.show = true
               this.navs = this.default_navs
               break
            case 'about':
            case 'tracks':
            case 'contact':
               this.show = true
               // if (!this.$store.state.isLogin) {
               //    this.navs = this.user_navs;
               // } else {
               this.navs = this.default_navs
               // }
               break
            case 'track':
            case 'profile':
               this.show = true
               // this.navs = this.user_navs;
               this.navs = this.default_navs
               break
            case '404':
            case 'course':
            case 'courses':
               this.show = false
               break
         }
      },
      toggleDrawer() {
         this.drawer.isOpen = !this.drawer.isOpen
      },
      onScroll(e) {
         if (window.pageYOffset || document.documentElement.scrollTop > 0) {
            this.fixed = true
         } else {
            this.fixed = false
         }
      }
   }
}
