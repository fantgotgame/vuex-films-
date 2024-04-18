import axios from 'axios';

const url = 'http://kinopoiskapiunofficial.tech';
const headers = {
   'X-API-KEY': 'cdca403d-a884-464d-b5c6-34244f3c198a',
   'Content-Type': 'application/json',
};

export default {
   getPremieres() {
      return axios.get(`${url}/api/v2.2/films/premieres`, {
         headers: headers,
         params: {
            year: 2024,
            month: 'APRIL'
         }
      });
   },

   getTopFilms(type, page) {
      return axios.get(`${url}/api/v2.2/films/top`, {
         headers: headers,
         params: {
            type,
            page
         }
      });
   },

   getFilmsBySearch(keyword, page) {
      return axios.get(`${url}/api/v2.1/films/search-by-keyword`, {
         headers: headers,
         params: {
            keyword,
            page
         }
      });
   },

   getFilmInfo(id) {
      return axios.get(`${url}/api/v2.2/films/${id}`, {
         headers: headers,
      });
   },

   getFilmInfoStaff(filmId) {
      return axios.get(`${url}/api/v1/staff`, {
         headers: headers,
         params: {
            filmId,
         }
      });
   },


};