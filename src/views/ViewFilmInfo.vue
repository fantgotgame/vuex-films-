<template>
  <div class="container">
    <div class="film-info">
      <img class="film-info__poster" :src="getFilmInfo.posterUrl" alt="" />
      <div class="film-info__space"></div>
      <div class="film-info__top">
        <div class="wrapper-df">
          <div class="film-info__name">
            <div class="film-info__name-ru">
              <h1>{{ getFilmInfo.nameRu }}</h1>
            </div>
            <span class="film-info__name-original">
              {{ getFilmInfo.nameOriginal }}
              <span class="film-info__name-age">
                {{ getFilmInfo.ratingAgeLimits }}+
              </span>
            </span>
            <div class="film-info__name-description">
              {{ getFilmInfo.shortDescription }}
            </div>
          </div>
          <div class="film-info__rate">
            <div class="film-info__rate-gen">
              {{ getFilmInfo.ratingKinopoisk }}
            </div>
            <div class="film-info__rate-amount">
              {{ getFilmInfo.ratingKinopoiskVoteCount }} оценка
            </div>
          </div>
        </div>
        <div class="film-info__description">
          <h2>О фильме</h2>
          <div class="film-info__description-row">
            <div class="film-info__description-left">Год производства</div>
            <div class="film-info__description-right">
              {{ getFilmInfo.year }}
            </div>
          </div>
          <div class="film-info__description-row">
            <div class="film-info__description-left">Страна</div>
            <div class="film-info__description-right">
              {{
                getFilmInfo.countries
                  ?.map((el) => {
                    return el["country"];
                  })
                  .join(", ")
              }}
            </div>
          </div>
          <div class="film-info__description-row">
            <div class="film-info__description-left">Жанр</div>
            <div class="film-info__description-right">
              {{
                getFilmInfo.genres
                  ?.map((el) => {
                    return el["genre"];
                  })
                  .join(", ")
              }}
            </div>
          </div>
          <div class="film-info__description-row">
            <div class="film-info__description-left">Слоган</div>
            <div class="film-info__description-right color-valueDark">
              "{{ getFilmInfo.slogan }}"
            </div>
          </div>
          <div class="film-info__description-row">
            <div class="film-info__description-left">Режиссер</div>
            <div class="film-info__description-right">
              {{ getFilmInfo.year }}
            </div>
          </div>
          <div class="film-info__description-row">
            <div class="film-info__description-left">Год производства</div>
            <div class="film-info__description-right">
              {{ getFilmInfo.year }}
            </div>
          </div>
          <div class="film-info__description-row">
            <div class="film-info__description-left">Год производства</div>
            <div class="film-info__description-right">
              {{ getFilmInfo.year }}
            </div>
          </div>
          <div class="film-info__description-row">
            <div class="film-info__description-left">Год производства</div>
            <div class="film-info__description-right">
              {{ getFilmInfo.year }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FilmInfo",
  computed: {
    getCurrentFilmId() {
      return this.$store.getters.getCurrentFilmId;
    },
    getFilmInfo() {
      console.log(this.$store.getters.getFilmInfo);
      return this.$store.getters.getFilmInfo;
    },
  },
  mounted() {
    if (this.getCurrentFilmId === null) {
      let urlArray = window.location.href.split("/");
      let filmId = urlArray[urlArray.length - 1];
      this.$store.dispatch("getFilmInfo", filmId);
      this.$store.dispatch("setCurrenFilmId", filmId);
    } else {
      this.$store.dispatch("getFilmInfo", this.getCurrentFilmId);
    }
  },
};
</script>
<style scoped lang="scss">
.container {
  max-width: 1400px;
  margin: 40px auto 0;
  padding: 40px;
  background: rgba(16, 14, 25, 0.7);
  border-radius: 50px;
}
.w- {
  &160 {
    width: 160px;
  }
}
.wrapper-df {
  display: flex;
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
      h1 {
        font-family: Graphik Kinopoisk LC Web, Tahoma, Arial, Verdana,
          sans-serif;
        font-size: 40px;
        font-weight: 700;
        line-height: 48px;
      }
    }
    &-original {
      margin-top: 5px;
      font-size: 18px;
      color: rgba(255, 255, 255, 0.6);
    }
    &-age {
      color: white;
      border: 1px solid white;
      padding: 1px 3px 0;
      font-size: 11px;
      font-weight: 600;
      line-height: 16px;
      border-radius: 3px;
    }
    &-description {
      margin-top: 10px;
      font-size: 18px;
      line-height: 24px;
      color: #fff;
    }
  }
  &__rate {
    margin-left: 5px;
    &-gen {
      color: #3bb33b;
      font-size: 32px;
      font-weight: 700;
      line-height: 40px;
    }
    &-amount {
      color: rgba(255, 255, 255, 0.5);
    }
  }
  &__description {
    h2 {
      margin-top: 20px;
      font-size: 24px;
      line-height: 30px;
      font-weight: 700;
    }
    &-row {
      display: flex;
      margin-top: 15px;
    }
    &-left {
      min-width: 160px;
      font-size: 13px;
      line-height: 18px;
    }
    &-rigth {
      font-size: 13px;
      line-height: 18px;
    }
  }
}
.color {
  &-valueDark {
    color: rgba(156, 151, 151, 0.7);
  }
}
</style>