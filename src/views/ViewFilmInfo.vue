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
              <span
                class="film-info__name-age"
                v-if="getFilmInfo.ratingAgeLimits"
              >
                {{ getFilmInfo.ratingAgeLimits?.replace(/[^\d;]/g, "") }}+
              </span>
            </span>
            <div class="film-info__name-description">
              {{ getFilmInfo.shortDescription }}
            </div>
          </div>
          <div class="film-info__rate">
            <div class="film-info__rate-gen" v-if="getFilmInfo.ratingKinopoisk">
              {{ getFilmInfo.ratingKinopoisk }}
            </div>
            <div class="film-info__rate-gen" v-else>Премьера</div>
            <div class="film-info__rate-amount">
              {{ getFilmInfo.ratingKinopoiskVoteCount }}
              <span v-if="getFilmInfo.ratingKinopoiskVoteCount > 4"
                >оценок</span
              >
            </div>
          </div>
        </div>
        <div class="film-info__description">
          <div class="wrapper-df">
            <div class="film-info__description-wrapper">
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
                <div
                  class="film-info__description-right color-value-dark"
                  v-if="getFilmInfo.slogan !== null"
                >
                  "{{ getFilmInfo.slogan }}"
                </div>
                <div
                  class="film-info__description-right color-value-dark"
                  v-else
                >
                  -
                </div>
              </div>
              <div class="film-info__description-row">
                <div class="film-info__description-left">Режиссер</div>
                <div class="film-info__description-right">
                  {{ searchStaff("DIRECTOR") }}
                </div>
              </div>
              <div class="film-info__description-row">
                <div class="film-info__description-left">Сценарий</div>
                <div class="film-info__description-right">
                  {{ searchStaff("WRITER") }}
                </div>
              </div>
              <div class="film-info__description-row">
                <div class="film-info__description-left">Продюсер</div>
                <div class="film-info__description-right">
                  {{ searchStaff("PRODUCER") }}
                </div>
              </div>
              <div class="film-info__description-row">
                <div class="film-info__description-left">Оператор</div>
                <div class="film-info__description-right">
                  {{ searchStaff("OPERATOR") }}
                </div>
              </div>
              <div class="film-info__description-row">
                <div class="film-info__description-left">Композитор</div>
                <div class="film-info__description-right">
                  {{ searchStaff("COMPOSER") }}
                </div>
              </div>
              <div class="film-info__description-row">
                <div class="film-info__description-left">Художник</div>
                <div class="film-info__description-right">
                  {{ searchStaff("DESIGN") }}
                </div>
              </div>
              <div class="film-info__description-row">
                <div class="film-info__description-left">Монтаж</div>
                <div class="film-info__description-right">
                  {{ searchStaff("EDITOR") }}
                </div>
              </div>
            </div>
            <div class="film-info__actor">
              <h3>В главных ролях</h3>
              <div
                class="film-info__actor-per"
                v-for="actor in searchStaffActor"
                :key="searchStaffActor.staffId"
              >
                {{ actor }}
              </div>
              <span class="film-info__actor-all" @click="showDialog"
                >{{ searchStaffActor.length }} актеров</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal class="dialog" v-model:show="dialogVisible">
      <div class="dialog__wrapper">
        <ul class="dialog__creators">
          <li class="dialog__item"><h2>Создатели</h2></li>
          <li class="dialog__item dialog__item-sep">/</li>
          <li class="dialog__item">
            <h2>
              <a href="#">{{ getFilmInfo.nameRu }}</a>
            </h2>
            <div class="dialog__sub">{{ getFilmInfo.year }}</div>
          </li>
        </ul>
        <div
          class="dialog__staff"
          v-for="(staff, index) in getFilmfStaff"
          :key="searchStaffActor.staffId"
        >
          <div class="dialog__staff-container">
            <div class="dialog__num">{{ index + 1 }}.</div>
            <div class="dialog__foto">
              <a href="#"
                ><img
                  class="dialog__foto-staff"
                  :src="staff.posterUrl"
                  :alt="staff.nameRu ? staff.nameRu : staff.nameEn"
              /></a>
            </div>
            <div class="dialog__info">
              <div class="dialog__name">
                <a href="#">{{ staff.nameRu ? staff.nameRu : staff.nameEn }}</a>
                <div class="dialog__role-staff">
                  {{ staff.professionText?.slice(0, -1) }}
                </div>
              </div>

              <div class="dialog__role" v-if="staff.description">
                ... {{ staff.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
import Modal from "@/components/Modal/Modal.vue";
export default {
  name: "FilmInfo",
  components: {
    Modal,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    searchStaff(who) {
      return this.getFilmfStaff
        .filter((obj) => obj["professionKey"] == who)
        .map((el) => (el.nameRu == "" ? el.nameEn : el.nameRu))
        .join(", ");
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  computed: {
    getCurrentFilmId() {
      return this.$store.getters.getCurrentFilmId;
    },
    getFilmInfo() {
      return this.$store.getters.getFilmInfo;
    },
    getFilmfStaff() {
      return this.$store.getters.getFilmfStaff;
    },
    searchStaffActor() {
      let staff = this.getFilmfStaff;
      return (staff = staff
        .filter((obj) => obj["professionKey"] == "ACTOR")
        .map((el, i) => {
          if (i <= 10) {
            return el.nameRu == "" ? el.nameEn : el.nameRu;
          }
        }));
    },
  },
  mounted() {
    if (this.getCurrentFilmId === null) {
      let urlArray = window.location.href.split("/");
      let filmId = urlArray[urlArray.length - 1];
      this.$store.dispatch("getFilmInfo", filmId);
      this.$store.dispatch("setCurrenFilmId", filmId);
      this.$store.dispatch("getFilmInfoStaffAxios", filmId);
    } else {
      this.$store.dispatch("getFilmInfo", this.getCurrentFilmId);
      this.$store.dispatch("getFilmInfoStaffAxios", this.getCurrentFilmId);
    }
  },
};
</script>
<style scoped lang="scss">
.container {
  max-width: 1400px;
  margin: 20px auto 0;
  padding: 20px;
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
  &__top {
    width: 100%;
  }
  &__poster {
    width: 400px;
    height: 50%;
    border-radius: 10px;
  }
  &__space {
    flex: 0 0 60px;
    width: 60px;
  }
  &__actor {
    min-width: 200px;
    margin-left: 15px;
    h3 {
      margin-bottom: 15px;
      font-size: 15px;
      line-height: 18px;
    }
    &-per {
      font-size: 13px;
      text-decoration: none;
      margin-bottom: 7px;
    }
    &-all {
      font-size: 13px;
      color: #f60;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
        transition: 0.2s;
      }
    }
  }
  &__name {
    flex: 1 1 auto;
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
    min-width: 200px;
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
    flex: 1 1 auto;
    &-wrapper {
      flex: 1 1 auto;
    }

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
  &-value-dark {
    color: rgba(156, 151, 151, 0.7);
  }
}
.dialog {
  &__num {
    width: 25px;
    font-family: tahoma, verdana, arial;
    font-size: 11px;
    color: #333;
  }
  &__info {
    margin-left: 20px;
    width: 100%;
  }
  &__role {
    color: #333;
    font-family: arial;
    font-size: 12px;

    &-staff {
      color: #333;
      font-family: arial;
      font-size: 12px;
      margin-right: 25px;
    }
  }
  &__name {
    display: flex;
    width: 100%;
    justify-content: space-between;
    & a {
      display: block;
      color: #007;
      text-decoration: underline;
      font-size: 12px;
      font-family: arial;
    }
  }
  &__staff {
    margin-top: 15px;
    &:nth-child(1) {
      margin-top: 30px !important;
    }
    &-container {
      min-height: 82px;
      display: flex;
    }
  }
  &__wrapper {
    width: 100%;
    height: calc(100vh - 100px);
    overflow-y: auto;
    padding-right: 20px;
  }
  &__creators {
    display: flex;
    align-items: baseline;
  }
  &__sub {
    color: #333;
    font-size: 12px;
    font-style: normal;
  }
  &__foto-staff {
    width: 52px;
    border: 1px #ccc solid;
  }
  &__item {
    h2 {
      color: #f60;
      display: inline;
      a {
        color: #005 !important;
        text-decoration: underline;
      }
    }
    &-sep {
      vertical-align: top;
      width: 25px;
      text-align: center;
      color: #999;
    }
  }
}
</style>