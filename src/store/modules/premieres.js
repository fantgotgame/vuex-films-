import FilmsApiService from "@/services/FilmsApiService";

export default {
  state: {
    premieres: []
  },
  actions: {
    getPremieresAxios(ctx) {
      FilmsApiService.getPremieres().then(data => {
        const premieres = data.data.items;

        ctx.commit('updatePremieres', premieres);
      });
    },
  },
  mutations: {
    updatePremieres(state, premieres) {
      state.premieres = premieres
    }
  },
  getters: {
    getPremieres(state) {
      return state.premieres
    }
  },
}