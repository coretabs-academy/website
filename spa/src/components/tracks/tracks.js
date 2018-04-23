export default {
   name: 'TracksComponent',
   components: {},
   data: () => ({
      tracks: {
         title: 'المسارات',
         cards: [{
            show: false,
            href: '/tracks/fullstack',
            title: 'تطوير الويب الشامل',
            background: 'images/tracks/fullstack.jpg',
            description: 'هذا الجزء مخصص لدروس تطوير الويب الشامل, باعتبارها من أكثر الوظائف طلباً في عالم النت !سنتعرف من خلاله على مختلف الأجزاء المتعلقة بالمجال ابتداءاً من أساسيات البرمجة باستعمال لغة بايثون, وصولاً إلى إنشاء موقعنا الخاص و مشاركته مع الآخرين. لإكتشاف المزيد انطلق فوراً مع الدروس.'
         }, {
            show: false,
            href: '/tracks/frontend',
            title: 'تطوير واجهات المواقع',
            background: 'images/tracks/frontend.jpg',
            description: 'هذا الجزء مخصص لدروس تطوير واجهات المواقع, باعتبارها من أكثر الوظائف طلباً في عالم النت !خلال دروس هذا المسار ستتعلم بشكل سلس ومختصر العديد من المهارات التي ستصبح مستعد لتوظيفها على مشاريع حقيقة فما ستجدة في هذه القائمة هي دروس متعلقة بالمجال إبتداءاً من الأساسيات و وصولاً لورش عمل تطبيقية سنقوم خلالها بعمل مواقع وتطبيقات متقدمة بطريقة سهلة وممتعة.'
         }]
      }
   }),
   created() {
      for (let i = 0; i < this.tracks.cards.length; i++) {
         this.$store.dispatch('getImgUrl', this.tracks.cards[i].background).then(img => {
            this.tracks.cards[i].background = img
         }).catch(error => {
            throw new Error(error.message)
         })
      }
   }
}
