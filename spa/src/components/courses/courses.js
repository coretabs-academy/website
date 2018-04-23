import _ from 'lodash'

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
         id: '',
         title: '',
         coursesGroup: ''
      },
      trackURL: '',
      prev: 'السابق',
      next: 'التالي'
   }),
   created() {
      this.drawer.isRight = this.$store.state.direction === 'rtl'
      this.getCourses()
   },
   watch: {
      $route(to, from) {
         this.getCourses()
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
      handleScroll(e) {
         console.log(e)
      },
      getCourses() {
         this.courses = []
         this.$store.commit('getGithubFileURL', {
            repo: `${this.$route.params.track}-tutorials`,
            path: 'topics.json'
         })
         let BreakException = {}
         try {
            this.$http.get(this.$store.state.githubFileURL)
               .then(data => {
                  data = data.categories
                  if (Number(this.$route.params.course) > 0 && Number(this.$route.params.course) <= data.length) {
                     data.forEach((item, index) => {
                        if (index === Number(this.$route.params.course) - 1) {
                           item.topics.forEach((course, courseNumber) => {
                              this.$store.commit('getGithubFileURL', {
                                 repo: `${this.$route.params.track}-tutorials`,
                                 path: `${course.id}/topic-${this.$store.state.lang}.txt`
                              })
                              let query = this.$api.b64EncodeUnicode(this.$store.state.githubFileURL)
                              this.courses.push({
                                 query: query,
                                 id: courseNumber + 1,
                                 title: course[`title-${this.$store.state.lang}`],
                                 url: {
                                    name: 'course',
                                    params: {
                                       number: courseNumber + 1
                                    },
                                    query: {
                                       url: query
                                    }
                                 }
                              })
                              if (courseNumber === item.topics.length - 1) {
                                 let id = Number(this.$route.params.number)
                                 if (typeof this.courses[id - 1] !== 'undefined') {
                                    this.currentCourse = {
                                       id: id,
                                       title: this.courses[id - 1].title,
                                       coursesGroup: `الدرس ${index + 1} : ${item[`title-${this.$store.state.lang}`]}`
                                    }
                                    this.$router.replace({
                                       query: {
                                          url: this.courses[id - 1].query
                                       }
                                    })
                                    let nextCourseNumber = Number(this.$route.params.course) + 1
                                    if (nextCourseNumber <= data.length) {
                                       this.dialog.url = `/tracks/${this.$route.params.track}/${nextCourseNumber}`
                                    } else {
                                       this.dialog.url = `/tracks/${this.$route.params.track}`
                                       this.dialog.message = 'نهاية المسار هل تريد الإنتقال إلى قائمة الدروس'
                                    }
                                    this.trackURL = `/tracks/${this.$route.params.track}`
                                    this.loaded = true
                                 } else {
                                    this.$router.push('/404')
                                 }
                              }
                           })
                           throw BreakException
                        }
                     })
                  } else {
                     this.$router.push('/404')
                  }
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
      gotToStep(n) {
         let course = this.courses[n - 1]
         this.$router.push({
            name: 'course',
            params: {
               number: course.id
            },
            query: {
               url: course.query
            }
         })
      },
      nextStep(n) {
         this.currentCourse.id = n + 1
         if (n === this.courses.length) {
            this.dialog.open = true
         }
         if (n < this.courses.length) {
            let course = this.courses[n]
            this.currentCourse.title = course.title
            this.$router.push({
               name: 'course',
               params: {
                  number: course.id
               },
               query: {
                  url: course.query
               }
            })
         }
      },
      prevStep(n) {
         this.currentCourse.id = n - 1
         let course = this.courses[n - 2]
         this.currentCourse.title = course.title
         this.$router.push({
            name: 'course',
            params: {
               number: course.id
            },
            query: {
               url: course.query
            }
         })
      }
   }
}
