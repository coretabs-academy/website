import marked from 'marked'

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
   updated() {
      document.querySelectorAll('.course img').forEach((img) => {
         let src = img.src.replace(/^.*[\\\/]/, '')
         this.$store.commit('getGithubFileURL', {
            repo: `${this.$route.params.track}-tutorials`,
            path: `${this.$api.b64DecodeUnicode(this.$route.query.url).replace(/[a-zA-Z-]+\.txt/,'')}/${src}`
         })
         img.src = this.$store.state.githubFileURL
      })
   },
   methods: {
      getCourse() {
         this.$http.get(this.$api.b64DecodeUnicode(this.$route.query.url))
            .then(data => {
               this.course = data
               this.loaded = true
            }).catch(err => {
               console.error(err)
            })
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
         })
         let youtube = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g
         mdText = mdText.replace(youtube, 'iframe.youtube.com/embed/$1/iframe')
         let html = marked(mdText)
         html = html.replace('iframe', '<iframe class="youtube" height="345" src="http://www')
         html = html.replace('/iframe', '" frameborder="0" allowfullscreen></iframe>')
         return html
      }
   }
}
