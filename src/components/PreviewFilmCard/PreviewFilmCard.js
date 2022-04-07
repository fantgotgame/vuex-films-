export default {
   name: 'PreviewFilmCard',
   props: ['premierItem', 'filmLength', 'year'],
   methods: {
      setCurrenFilmId(id) {
         this.$store.dispatch('setCurrenFilmId', id);
      }
   }
}