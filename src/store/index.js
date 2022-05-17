import { createStore } from 'vuex';
import premieres from "@/store/modules/premieres";
import top from "@/store/modules/top";
import searchFilms from "@/store/modules/searchFilms";
import staff from '@/store/modules/staff';

export default createStore({
   modules: {
      premieres,
      top,
      searchFilms,
      staff
   }
})
