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

<script>
import PreviewFilmCard from "@/components/PreviewFilmCard";
import {mapGetters} from 'vuex';

export default {
  name: 'Premieres',
  components: {
    PreviewFilmCard
  },
  computed: mapGetters(['getPremieres']),
  mounted() {
    this.$store.dispatch('getPremieresAxios');
  },
  methods: {
    getYear(year) {
      return year.split('-')[0];
    }
  }
}
</script>
<style lang="scss" scoped>
.cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>