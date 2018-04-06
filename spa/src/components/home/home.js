import {
   mapActions
} from 'vuex'
export default {
   name: 'HomeComponent',
   components: {},
   data: () => ({
      main: {
         title: 'تطوير الويب',
         description: 'إن الإلمام بمجال البرمجة، أمرٌ لا غنى عنه في أيامنا هذه. وإن تعلُّم البرمجة هو من أكثر الأمور الغنية والمفيدة التي يمكنك القيام بها.'
      },
      courses: {
         title: 'المسارات',
         cards: [{
            show: false,
            href: 'fullstack',
            title: 'تطوير الويب الشامل',
            background: 'home/fullstack.jpg',
            description: 'هذا الجزء مخصص لدروس تطوير الويب الشامل, باعتبارها من أكثر الوظائف طلباً في عالم النت !سنتعرف من خلاله على مختلف الأجزاء المتعلقة بالمجال ابتداءاً من أساسيات البرمجة باستعمال لغة بايثون, وصولاً إلى إنشاء موقعنا الخاص و مشاركته مع الآخرين. لإكتشاف المزيد انطلق فوراً مع الدروس.'
         }, {
            show: false,
            href: 'frontend',
            title: 'تطوير واجهات المواقع',
            background: 'home/frontend.jpg',
            description: 'هذا الجزء مخصص لدروس تطوير واجهات المواقع, باعتبارها من أكثر الوظائف طلباً في عالم النت !خلال دروس هذا المسار ستتعلم بشكل سلس ومختصر العديد من المهارات التي ستصبح مستعد لتوظيفها على مشاريع حقيقة فما ستجدة في هذه القائمة هي دروس متعلقة بالمجال إبتداءاً من الأساسيات و وصولاً لورش عمل تطبيقية سنقوم خلالها بعمل مواقع وتطبيقات متقدمة بطريقة سهلة وممتعة.'
         }]
      }
   }),
   created() {
      for (let i = 0; i < this.courses.cards.length; i++) {
         this.$store.dispatch('getImgUrl', this.courses.cards[i].background).then(img => {
            this.courses.cards[i].background = img
         }).catch(error => {
            throw new Error(error.message);
         })
      }
   }
}
