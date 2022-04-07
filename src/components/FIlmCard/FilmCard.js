export default {
   name: 'FilmCard',
   props: ['premierItem'],
   methods: {
      getYear(year) {
         return year.split('-')[0];
      }
   }
}