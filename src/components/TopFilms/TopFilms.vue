<template>
  <div class="cards">
    <PreviewFilmCard
      v-for="item in getTop250Films"
      :key="item.id"
      :premier-item="item"
      :film-length="item.filmLength"
    />
  </div>
</template>

<script src='./TopFilms.js' />
<style lang="scss" scoped src='./TopFilms.scss' />
