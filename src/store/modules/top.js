import FilmsApiService from "@/services/FilmsApiService";

export default {
  state: {
    topFilms: [],
    top250Films: []
  },
  actions: {
    getTopAwaitFilmsAxios(ctx) {
      FilmsApiService.getTopFilms('TOP_AWAIT_FILMS', 1).then(data => {
        const topAwaitFilms = data.data.films;
        ctx.commit('updateTopAwaitFilms', topAwaitFilms);
      });
    },
    getTop250FilmsAxios(ctx) {
      FilmsApiService.getTopFilms('TOP_250_BEST_FILMS', 1).then(data => {
        const top250Films = data.data.films;
        ctx.commit('updateTop250Films', top250Films);
      });
    }
  },
  mutations: {
    updateTopAwaitFilms(state, premieres) {
      state.topFilms = premieres;
    },
    updateTop250Films(state, top) {
      state.top250Films = top;
    }
  },
  getters: {
    getTopAwaitFilms(state) {
      return state.topFilms
    },
    getTop250Films(state) {
      return state.top250Films;
    }
  },
}