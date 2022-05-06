export default {
  name: 'PreviewFilmCard',
  props: ['premierItem', 'filmLength', 'year'],
  methods: {
    setCurrenFilmId(id) {
      this.$store.dispatch('setCurrenFilmId', id);
    }
  },
  computed: {
    getUrlForCurrentFilm() {
      const location = window.location.pathname.split('/')[1];
      if (location === 'premieres') {
        return `${this.premierItem.kinopoiskId}`
      } else {
        return `${this.premierItem.filmId}`
      }
    }
  }
}