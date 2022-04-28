import PreviewFilmCard from "@/components/PreviewFilmCard/PreviewFilmCard.vue";
import { mapGetters } from 'vuex';

export default {
   name: 'Premieres',
   components: {
      PreviewFilmCard
   },
   computed: mapGetters(['getPremieres']),
   mounted() {
      this.$store.dispatch('getPremieresAxios');
   },
   methods: {
      getYear(year) {
         return year.split('-')[0];
      }
   }
}