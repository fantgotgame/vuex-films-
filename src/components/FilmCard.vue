<template>
  <div class="film-card" v-if="premierItem.year === 2022 || premierItem.year === 2021">
    <img :src="premierItem.posterUrl" alt="" class="film-card__poster">
    <div class="film-card__title mt-16">
      {{ premierItem.nameRu }}
    </div>
    <div class="film-card__description mt-8">
      <div class="film-card__premier mt-4">
        <span class="text-bold">Премьера в России:</span> {{ getYear(premierItem.premiereRu) }} год
      </div>
      <div class="film-card__duration mt-4">
        <span class="text-bold">Длительность: </span> {{ premierItem.duration }} минут
      </div>
      <div class="film-card__genres mt-4">
        <span class="text-bold"> Жанры: </span>
        <span v-for="(item, index) in premierItem.genres">
          {{ item.genre }}{{ index < premierItem.genres.length - 1 ? ', ' : ' ' }}
        </span>
      </div>
      <div class="film-card__country mt-4">
        <span class="text-bold">Страна: </span> {{ premierItem.countries[0].country }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilmCard',
  props: ['premierItem'],
  methods: {
    getYear(year) {
      return year.split('-')[0];
    }
  }
}
</script>

<style lang="scss">
.film-card {
  cursor: pointer;
  padding: 15px;
  box-sizing: border-box;
  width: 300px;
  transform: translate(0);
  border: 1px solid transparent;

  &__poster {
    height: 400px;
  }

  &:hover {
    border: 1px solid lightgray;
    box-shadow: -5px 5px 10px 5px rgba(0, 0, 255, .2);
    border-radius: 20px;
  }

  &__title {
    display: block;
    font-weight: bold;
    font-size: 18px;
  }

  &__text {
    font-size: 16px;

  }
}
</style>