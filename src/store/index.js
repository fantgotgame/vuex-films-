import { createStore } from 'vuex';
import premieres from "@/store/modules/premieres";
import top from "@/store/modules/top";

export default createStore({
  modules: {
    premieres,
    top
  }
})
