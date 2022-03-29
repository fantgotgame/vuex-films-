<template>
  <div class="cards">
    <PreviewFilmCard v-for="item in getPremieres" :key="item.id" :premier-item="item"/>
  </div>

</template>

<script>
import PreviewFilmCard from "@/components/PreviewFilmCard";
import { mapGetters } from 'vuex';

export default {
  name: 'Premieres',
  components: {
    PreviewFilmCard
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