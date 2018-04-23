export default {
   name: 'TrackComponent',
   components: {},
   data: () => ({
      title: '',
      courses: [],
      action: 'عرض',
      loaded: false
   }),
   async created() {
      try {
         this.$store.commit('getGithubFileURL', {
            repo: `${this.$route.params.track}-tutorials`,
            path: 'topics.json'
         })
         let data = await this.$http.get(this.$store.state.githubFileURL)
         data = JSON.parse(this.$api.b64DecodeUnicode(data.content))
         let host = data.host
         data = data.categories
         this.title = 'دروس تطوير الويب الشامل'
         data.forEach((item, index) => {
            this.courses.push({
               percent: 0,
               time: 'ساعتان',
               image: `${host}/images/${item.image}`,
               desc: item[`desc-${this.$store.state.lang}`],
               title: item[`title-${this.$store.state.lang}`],
               url: `/tracks/${this.$route.params.track}/${index}/1`
            })
         })
         this.loaded = true
      } catch (e) {
         throw new Error(e)
      }
   },
   updated() {
      let cards = document.querySelectorAll('.track .card');
      for (let i = 0; i < cards.length; i++) {
         cards[i].querySelector('.card__media').style.height = `${cards[i].offsetHeight}px`
      }
   }
}
