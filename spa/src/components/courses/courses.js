import marked from 'marked'

export default {
   name: 'CoursesComponent',
   components: {},
   data: () => ({
      courses: [],
      loaded: false,
      dialog: {
         url: '',
         open: false,
         title: '',
         message: 'هل تريد الإنتقال إلى الدرس التالي ؟',
         noBtn: 'لا',
         yesBtn: 'نعم'
      },
      drawer: {
         isOpen: true,
         isRight: false
      },
      currentCourse: {
         id: 1,
         title: '',
         coursesGroup: ''
      },
      trackURL: '',
      prev: 'السابق',
      next: 'التالي'
   }),
   created() {
      this.drawer.isRight = this.$store.state.direction === 'rtl' ? true : false
      this.$http.get(`https://raw.githubusercontent.com/coretabs-academy/${this.$route.params.track}-tutorials/master/topics.json`)
         .then(result => {
            let BreakException = {};
            try {
               result.body.categories.forEach((item, index) => {
                  if (index === Number(this.$route.params.course)) {
                     item.topics.forEach((course, courseNumber) => {
                        this.$http.get(`https://api.github.com/repos/coretabs-academy/${this.$route.params.track}-tutorials/contents/${course.id}/topic-${this.$store.state.lang}.txt`)
                           .then(data => {
                              this.courses.push({
                                 id: courseNumber + 1,
                                 title: course[`title-${this.$store.state.lang}`],
                                 content: this.b64DecodeUnicode(data.body.content)
                              });
                              if (courseNumber === item.topics.length - 1) {
                                 this.currentCourse = {
                                    id: this.courses[0].id,
                                    title: this.courses[0].title,
                                    coursesGroup: `الدرس ${index + 1} : ${item[`title-${this.$store.state.lang}`]}`
                                 }
                                 this.trackURL = `/tracks/${this.$route.params.track}/${Number(this.$route.params.course)}`
                                 this.dialog.url = `/tracks/${this.$route.params.track}/${Number(this.$route.params.course) + 1}/1`
                                 this.loaded = true
                              }
                           }, error => {
                              console.error(error);
                           })

                     });
                     throw BreakException
                  }
               })
            } catch (e) {
               if (e !== BreakException) {
                  throw e
               }
            }
         }, error => {
            console.log(error)
         })
   },
   methods: {
      b64DecodeUnicode(str) {
         return decodeURIComponent(atob(str).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
         }).join(''));
      },
      nextStep(n) {
         this.currentCourse.id = n + 1;

         if (n === this.courses.length) {
            this.dialog.open = true
         }

         if (n < this.courses.length) {
            this.currentCourse.title = this.courses[n].title;
         }
      },
      prevStep(n) {
         this.currentCourse.id = n - 1;
         this.currentCourse.title = this.courses[n - 2].title;
      },
      previewText(mdText) {
         marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false
         });
         return marked(mdText)
      }
   }
}
