<template>
  <div class="container">
    <h1>Топ 250 фильмов:</h1>
    <TopFilms></TopFilms>
  </div>
</template>

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

<script>
import TopFilms from "@/components/TopFilms/TopFilms.vue";

export default {
  components: {
    TopFilms
  }
}
</script>