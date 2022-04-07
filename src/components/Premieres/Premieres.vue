<template>
  <div class="cards">
    <PreviewFilmCard
      v-for="item in getPremieres"
      :key="item.id"
      :premier-item="item"
      :film-length="item.duration"
      :year="getYear(item.premiereRu)"
    />
  </div>
</template>

<script src='./Premieres.js' />
<style lang="scss" scoped src='./Premieres.scss' />
