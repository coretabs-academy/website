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
      this.$store.commit('getGithubFileURL', {
         repo: `${this.$route.params.track}-tutorials`,
         path: 'topics.json'
      })
      this.$http.get(this.$store.state.githubFileURL)
         .then(data => {
            this.title = 'دروس تطوير الويب الشامل'
            let host = data.host
            data = data.categories
            data.forEach((item, index) => {
               this.courses.push({
                  percent: 0,
                  time: 'ساعتان',
                  image: `${host}/images/${item.image}`,
                  desc: item[`desc-${this.$store.state.lang}`],
                  title: item[`title-${this.$store.state.lang}`],
                  url: `/tracks/${this.$route.params.track}/${index + 1}/1`
               })
            })
            this.loaded = true
         })
         .catch(err => {
            console.error(err)
         })
   },
   updated() {
      let cards = document.querySelectorAll('.track .card')
      for (let i = 0; i < cards.length; i++) {
         cards[i].querySelector('.card__media').style.height = `${cards[i].offsetHeight}px`
      }
   }
}
