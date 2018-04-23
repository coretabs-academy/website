import _ from 'lodash'
import marked from 'marked'

export default {
   name: 'CoursesComponent',
   components: {},
   data: () => ({
      height: 0,
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
      this.$store.commit('getGithubFileURL', {
         repo: `${this.$route.params.track}-tutorials`,
         path: 'topics.json'
      })

      let BreakException = {};
      try {
         this.$http.get(this.$store.state.githubFileURL)
            .then(data1 => {
               data1 = JSON.parse(this.$api.b64DecodeUnicode(data1.content)).categories
               data1.forEach((item, index) => {
                  if (index === Number(this.$route.params.course)) {
                     item.topics.forEach((course, courseNumber) => {
                        this.$store.commit('getGithubFileURL', {
                           repo: `${this.$route.params.track}-tutorials`,
                           path: `${course.id}/topic-${this.$store.state.lang}.txt`
                        })
                        this.$http.get(this.$store.state.githubFileURL)
                           .then(data2 => {
                              this.courses.push({
                                 id: courseNumber + 1,
                                 title: course[`title-${this.$store.state.lang}`],
                                 content: this.$api.b64DecodeUnicode(data2.content)
                              });
                              if (courseNumber == 0) {
                                 this.currentCourse = {
                                    id: courseNumber + 1,
                                    title: course[`title-${this.$store.state.lang}`],
                                    coursesGroup: `الدرس ${index + 1} : ${item[`title-${this.$store.state.lang}`]}`
                                 }
                              }
                              if (courseNumber === item.topics.length - 1) {
                                 this.dialog.url = `/tracks/${this.$route.params.track}/${Number(this.$route.params.course) + 1}/1`
                                 this.trackURL = `/tracks/${this.$route.params.track}`
                                 this.loaded = true
                              }
                           }).catch(e => {
                              throw e
                           })
                     })
                     throw BreakException
                  }
               })
            })
            .catch(e => {
               if (e !== BreakException) {
                  throw e
               }
            })

      } catch (e) {
         if (e !== BreakException) {
            console.error(e)
         }
      }
   },
   computed: {
      orderedCourses: function() {
         return _.orderBy(this.courses, 'id')
      }
   },
   methods: {
      onResize() {
         this.height = window.innerHeight - document.querySelector('.courses .stepper>.toolbar').offsetHeight - document.querySelector('.courses .stepper>.footer').offsetHeight
      },
      gotToStep(n) {
         console.log('1000')
         this.currentCourse.id = n;
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
