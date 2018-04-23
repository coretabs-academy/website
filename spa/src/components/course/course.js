export default {
   name: 'CourseComponent',
   components: {},
   data: () => ({
      course: '',
      loaded: true
   }),
   created() {
      this.getCourse()
   },
   watch: {
      $route(to, from) {
         setTimeout(() => {
            this.getCourse()
         }, 100)
      }
   },
   methods: {
      getCourse() {
         this.$http.get(this.$api.b64DecodeUnicode(this.$route.query.url))
            .then(data => {
               this.course = this.$api.b64DecodeUnicode(data.content)
               this.loaded = true
            }).catch(err => {
               console.error(err)
            })
      }
   }
}
