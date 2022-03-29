import FilmsApiService from "@/services/FilmsApiService";

export default {
  state: {
    topFilms: []
  },
  actions: {
    getTopFilmsAxios(ctx) {
      FilmsApiService.getTopFilms('TOP_AWAIT_FILMS', 1).then(data => {
        const topFilms = data.data.films;
        ctx.commit('updateTopFilms', topFilms);
      });
    },
  },
  mutations: {
    updateTopFilms(state, premieres) {
      state.topFilms = premieres
    }
  },
  getters: {
    getTopFilms(state) {
      return state.topFilms
    }
  },
}