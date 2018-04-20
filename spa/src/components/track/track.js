export default {
   name: 'TrackComponent',
   components: {},
   data: () => ({
      title: '',
      courses: [],
      action: 'عرض',
      loaded: false
   }),
   created() {
      this.$http.get(`https://raw.githubusercontent.com/coretabs-academy/${this.$route.params.track}-tutorials/master/topics.json`)
         .then(result => {
            this.title = 'دروس تطوير الويب الشامل'
            result.body.categories.forEach((item, index) => {
               this.courses.push({
                  percent: 10,
                  time: 'ساعتان',
                  desc: item[`desc-${this.$store.state.lang}`],
                  title: item[`title-${this.$store.state.lang}`],
                  image: `${result.body.host}/images/${item.image}`,
                  url: `/tracks/${this.$route.params.track}/${index}/1`
               })
               if (index === result.body.categories.length - 1) {
                  this.loaded = true
               }
            })
         }, error => {
            console.error(error);
         })
   },
   updated() {
      let cards = document.querySelectorAll('.track .card');
      for (let i = 0; i < cards.length; i++) {
         cards[i].querySelector('.card__media').style.height = `${cards[i].offsetHeight}px`
      }
   }
}
