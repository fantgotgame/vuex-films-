import FilmsApiService from "@/services/FilmsApiService";

export default {
  state: {
    filmsBySearch: [],
    filmInfo: [],
    currentFilmId: null
  },
  actions: {
    getFilmsBySearchAxios(ctx, keyword, page) {
      FilmsApiService.getFilmsBySearch(keyword, page).then(data => {
        console.log(data);
        const filmsBySearch = data.data;

        ctx.commit('updateFilmsBySearch', filmsBySearch);
      });
    },
    getFilmInfo(ctx, id) {
      FilmsApiService.getFilmInfo(id).then(data => {
        const filmInfo = data.data;

        ctx.commit('updateFilmInfo', filmInfo);
      });
    },
    setCurrenFilmId(ctx, id) {
      ctx.commit('updateCurrenFilmId', id);
    },
    clearStateFilmsBySearch(ctx) {
      ctx.commit('clearStateFilmsBySearch');
    }
  },
  mutations: {
    updateFilmsBySearch(state, premieres) {
      state.filmsBySearch = premieres;
    },
    updateFilmInfo(state, filmInfo) {
      state.filmInfo = filmInfo;
    },
    updateCurrenFilmId(state, filmId) {
      state.currentFilmId = filmId
    },
    clearStateFilmsBySearch(state) {
      state.filmsBySearch = [];
    }
  },
  getters: {
    getFilmsBySearch(state) {
      return state.filmsBySearch;
    },
    getCurrentFilmId(state) {
      return state.currentFilmId;
    },
    getFilmInfo(state) {
      return state.filmInfo;
    }
  },
}