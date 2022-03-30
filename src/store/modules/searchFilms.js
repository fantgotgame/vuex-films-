import FilmsApiService from "@/services/FilmsApiService";

export default {
  state: {
    filmsBySearch: []
  },
  actions: {
    getFilmsBySearchAxios(ctx, keyword, page) {
      FilmsApiService.getFilmsBySearch(keyword, page).then(data => {
        console.log(data);
        const filmsBySearch = data.data;

        ctx.commit('updateFilmsBySearch', filmsBySearch);
      });
    },
    clearStateFilmsBySearch(ctx) {
      ctx.commit('clearStateFilmsBySearch');
    }
  },
  mutations: {
    updateFilmsBySearch(state, premieres) {
      state.filmsBySearch = premieres
    },
    clearStateFilmsBySearch(state) {
      state.filmsBySearch = [];
    }
  },
  getters: {
    getFilmsBySearch(state) {
      return state.filmsBySearch
    }
  },
}