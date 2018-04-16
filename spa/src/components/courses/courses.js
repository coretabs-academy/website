import marked from 'marked'

export default {
   name: 'CoursesComponent',
   components: {},
   data: () => ({
      mini: false,
      courses: [],
      drawer: true,
      loaded: false,
      currentCourse: 1,
      prev: 'السابق',
      next: 'التالي',
      nextCourse: {
         url: '',
         name: 'الدرس التالي',
      }
   }),
   created() {
      this.$http.get(`https://raw.githubusercontent.com/coretabs-academy/${this.$route.params.track}-tutorials/master/topics.json`)
         .then(result => {
            let BreakException = {};
            try {
               result.body.categories.forEach((item, index) => {
                  if (index === Number(this.$route.params.course)) {
                     item.topics.forEach((course, courseNumber) => {
                        this.$http.get(`https://api.github.com/repos/coretabs-academy/${this.$route.params.track}-tutorials/contents/${course.id}/topic-${this.$store.state.lang}.md`)
                           .then(data => {
                              this.courses.push({
                                 id: courseNumber + 1,
                                 title: course[`title-${this.$store.state.lang}`],
                                 content: this.b64DecodeUnicode(data.body.content)
                              });

                              if (courseNumber === item.topics.length - 1) {
                                 this.loaded = true
                                 this.nextCourse.url = `/tracks/${this.$route.params.track}/${Number(this.$route.params.course) + 1}/1`
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
            console.error(error);
         })
   },
   methods: {
      b64DecodeUnicode(str) {
         return decodeURIComponent(atob(str).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
         }).join(''));
      },
      nextStep(n) {
         this.currentCourse = n + 1
      },
      prevStep(n) {
         this.currentCourse = n - 1
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
