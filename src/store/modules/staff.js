import FilmsApiService from "@/services/FilmsApiService";

export default {
   state: {
      filmStaff: []
   },
   actions: {
      getFilmInfoStaffAxios(ctx, id) {
         FilmsApiService.getFilmInfoStaff(id).then(data => {
            const filmStaff = data.data;
            ctx.commit('updateFilmfStaff', filmStaff);
         });
      },
   },
   mutations: {
      updateFilmfStaff(state, filmStaff) {
         state.filmStaff = filmStaff
      }
   },
   getters: {
      getFilmfStaff(state) {
         return state.filmStaff
      }
   },
}