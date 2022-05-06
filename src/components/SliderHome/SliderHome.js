import { mapGetters } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
   name: 'MyComponent',
   components: {
      Swiper,
      SwiperSlide,
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
      };
   },
   computed: mapGetters(['getTopAwaitFilms']),
}