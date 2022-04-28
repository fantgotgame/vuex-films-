<template>
  <swiper
      class="swiper"
      :slidesPerView="3"
      :centeredSlides="true"
      :loop="true"
      :space-between="100"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      ref="mySwiper"
  >
    <swiper-slide
        v-for="itemFilm in getTopAwaitFilms"
        :key="itemFilm.filmId"
    >
      <div class="film-card-slider">
        <img
            :src="itemFilm.posterUrl"
            alt=""
            class="film-card-slider__poster"
        />
        <div class="film-card-slider__description mt-8">
          <div class="film-card-slider__title mt-16">
            {{ itemFilm.nameRu }}
          </div>
          <div class="film-card-slider__premier mt-16">
            <span class="text-bold film-card-slider__text"
            >Премьера в России:</span
            >
            {{ itemFilm.year }} год
          </div>
          <div
              class="film-card-slider__duration mt-16"
              v-if="itemFilm.filmLength"
          >
            <span class="text-bold film-card-slider__text">
              Длительность:
            </span>
            {{ itemFilm.filmLength }} минут
          </div>
          <div class="film-card-slider__genres mt-16">
            <span class="text-bold"> Жанры: </span>
            <span v-for="(item, index) in itemFilm.genres">
              {{
                item.genre
              }}{{ index < itemFilm.genres.length - 1 ? ", " : " " }}
            </span>
          </div>
          <div class="film-card-slider__country mt-16">
            <span class="text-bold film-card-slider__text">Страна: </span>
            {{ itemFilm.countries[0].country }}
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script src='./SliderHome.js' />
<style lang="scss" scoped src='./SliderHome.scss' />