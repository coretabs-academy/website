import TracksComponent from '../tracks/tracks.vue'
export default {
   name: 'HomeComponent',
   components: {
      TracksComponent
   },
   data: () => ({
      main: {
         title: 'تطوير الويب',
         description: 'إن الإلمام بمجال البرمجة، أمرٌ لا غنى عنه في أيامنا هذه. وإن تعلُّم البرمجة هو من أكثر الأمور الغنية والمفيدة التي يمكنك القيام بها.'
      }
   }),
   created() {}
}
