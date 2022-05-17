import PreviewFilmCard from "@/components/PreviewFilmCard/PreviewFilmCard.vue";
import { mapGetters } from 'vuex';

export default {
   name: 'TopFilms',
   components: {
      PreviewFilmCard
   },
   computed: mapGetters(['getTop250Films']),
   mounted() {
      this.$store.dispatch('getTop250FilmsAxios');
   },
   methods: {
      getYear(year) {
         console.log(year)
         return year.split('-')[0];
      }
   }
}