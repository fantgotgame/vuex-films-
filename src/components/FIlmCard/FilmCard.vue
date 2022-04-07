<template>
  <div
    class="film-card"
    v-if="premierItem.year === 2022 || premierItem.year === 2021"
  >
    <img :src="premierItem.posterUrl" alt="" class="film-card__poster" />
    <div class="film-card__title mt-16">
      {{ premierItem.nameRu }}
    </div>
    <div class="film-card__description mt-8">
      <div class="film-card__premier mt-4">
        <span class="text-bold">Премьера в России:</span>
        {{ getYear(premierItem.premiereRu) }} год
      </div>
      <div class="film-card__duration mt-4">
        <span class="text-bold">Длительность: </span>
        {{ premierItem.duration }} минут
      </div>
      <div class="film-card__genres mt-4">
        <span class="text-bold"> Жанры: </span>
        <span v-for="(item, index) in premierItem.genres">
          {{ item.genre
          }}{{ index < premierItem.genres.length - 1 ? ", " : " " }}
        </span>
      </div>
      <div class="film-card__country mt-4">
        <span class="text-bold">Страна: </span>
        {{ premierItem.countries[0].country }}
      </div>
    </div>
  </div>
</template>

<script src='./FilmCard.js' />
<style lang="scss" src='./FilmCard.scss' />