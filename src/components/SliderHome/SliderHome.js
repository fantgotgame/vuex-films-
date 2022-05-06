import { mapGetters } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay } from "swiper";

export default {
   name: 'MyComponent',
   components: {
      Swiper,
      SwiperSlide,
   },
   methods: {
      setCurrenFilmId(id) {
         this.$store.dispatch('setCurrenFilmId', id);
      }
   },
   setup() {
      const onSwiper = (swiper) => {
         console.log(swiper);
      };
      const onSlideChange = () => {
         console.log('slide change');
      };
      return {
         onSwiper,
         onSlideChange,
         modules: [Autoplay]
      };

   },
   computed: mapGetters(['getTopAwaitFilms']),
}