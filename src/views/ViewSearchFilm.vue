<template>
  <div class="container">
    <h1>Поиск фильма</h1>
    <Input
        id="nameRu"
        label-text="Введите название фильма"
        placeholder="Матрица..."
        v-on:methodOnEmit="searchFilmsByKeyword($event)"
        error-text-valid="Введите название фильма от 4 символов"
        show-error-response="Фильмы не найдены"
        :show-error-response="showErrorEmptyFilms"
        :show-error-valid="this.errorValidation"
        v-on:checkErrorsOfValidation="checkErrorsOfValidation($event)"
    />
    <div class="cards">
      <PreviewFilmCard
          v-for="item in getFilmsBySearch.films"
          :key="item.filmId"
          :premier-item="item"
          :year="item.year"
          :film-length="item.filmLength"
      />
    </div>
  </div>

</template>

<script>
import Input from "@/components/form/Input";
import PreviewFilmCard from "@/components/PreviewFilmCard";

export default {
  components: {
    Input,
    PreviewFilmCard
  },
  data() {
    return {
        errorValidation: false
    }
  },
  methods: {
    searchFilmsByKeyword(e) {
      if (e.length >= 4) {
        this.$store.dispatch('getFilmsBySearchAxios', e, 1);
      }
    },
    checkErrorsOfValidation(e) {
      this.errorValidation = e.length < 4;
    }
  },
  computed: {
    getFilmsBySearch() {
      return this.$store.getters.getFilmsBySearch;
    },
    showErrorEmptyFilms() {
      return this.$store.getters.getFilmsBySearch.searchFilmsCountResult === 0;
    }
  },
}
</script>

<style scoped lang="scss">
.container {
  max-width: 1400px;
  margin: 40px auto 0;
}
.cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>