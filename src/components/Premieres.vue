<template>
  <div class="cards">
    <FilmCard v-for="item in getPremieres" :key="item.id" :premier-item="item"/>

  </div>

</template>

<script>
import FilmCard from "@/components/FilmCard";
import { mapGetters } from 'vuex';

export default {
  name: 'Premieres',
  components: {
    FilmCard
  },
  computed: mapGetters(['getPremieres']),
  mounted() {
    this.$store.dispatch('getPremieresAxios');
  }
}
</script>
<style lang="scss">
  .cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>