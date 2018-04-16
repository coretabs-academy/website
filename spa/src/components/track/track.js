export default {
   name: 'TrackComponent',
   components: {},
   data: () => ({
      title: '',
      courses: [],
      action: 'عرض',
      started: 'بدأ',
      notStarted: 'لم يتم البدأ',
   }),
   created() {
      this.$http.get(`https://raw.githubusercontent.com/coretabs-academy/${this.$route.params.track}-tutorials/master/topics.json`)
         .then(result => {
            this.title = 'دروس تطوير الويب الشامل'
            result.body.categories.forEach(item => {
               this.courses.push({
                  percent: 10,
                  time: 'ساعتان',
                  desc: item[`desc-${this.$store.state.lang}`],
                  title: item[`title-${this.$store.state.lang}`],
                  image: `${result.body.host}/images/${item.image}`
               })
            })
         }, error => {
            console.error(error);
         })
   }
}
