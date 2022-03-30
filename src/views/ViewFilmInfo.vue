<template>
  <div class="container">
    <div class="film-info">
      <img class="film-info__poster" :src="getFilmInfo.posterUrl" alt="">
      <div class="film-info__space"></div>
      <div class="film-info_description">
        <div class="film-info__name">
          <div class="film-info__name-ru">{{ getFilmInfo.nameRu }}</div>
          <div class="film-info__name-original">
            {{ getFilmInfo.nameOriginal }}
            <span сlass="">{{  }}+</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilmInfo',
  computed: {
    getCurrentFilmId() {
      return this.$store.getters.getCurrentFilmId;
    },
    getFilmInfo() {
      return this.$store.getters.getFilmInfo;
    },
  },
  mounted() {
    if (this.getCurrentFilmId === null) {
      let urlArray = window.location.href.split('/');
      let filmId = urlArray[urlArray.length - 1];
      this.$store.dispatch('getFilmInfo', filmId);
      this.$store.dispatch('setCurrenFilmId', filmId);
    } else {
      this.$store.dispatch('getFilmInfo', this.getCurrentFilmId);
    }
  },
}
</script>

<style scoped lang="scss">
.container {
  max-width: 1400px;
  margin: 40px auto 0;
  padding: 40px;
  background: rgba(16, 14, 25, 0.7);
  border-radius: 50px;
}

.film-info {
  display: flex;

  &__poster {
    width: 400px;
    border-radius: 10px;
  }

  &__space {
    flex: 0 0 60px;
    width: 60px;
  }

  &__name {
    &-ru {

    }

    &-original {

    }
  }
}
</style>