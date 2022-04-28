<template>
  <SliderHome />
  <div class="container"></div>
</template>

<script>
import SliderHome from "@/components/SliderHome/SliderHome.vue";

export default {
  components: {
    SliderHome,
  },
  mounted() {
    this.$store.dispatch("getTopAwaitFilmsAxios");
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 120px;
  margin: 0 auto;
}
</style>