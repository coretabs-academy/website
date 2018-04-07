import Vue from 'vue';

export default {
   name: 'TracksComponent',
   components: {},
   data: () => ({
      host: '',
      track: '',
      action: '',
      course: '',
      number: '',
      courses: [],
      isTrak: false
   }),
   created() {
      this.action = 'إبدأ'
      this.track = this.$route.params.track
      this.course = this.$route.params.course
      this.number = this.$route.params.number
      if (this.course === undefined && this.number === undefined) {
         this.isTrak = true
         this.$http.get(`https://raw.githubusercontent.com/coretabs-academy/${this.track}-tutorials/master/topics.json`).then(response => {
            this.host = response.body.host
            this.courses = response.body.categories
         }, err => {
            console.error(err)
         })
      }
   }
}
