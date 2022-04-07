<template>
  <div class="container">
    <h1>Премьеры</h1>
    <Premieres />
  </div>
</template>

<script>
import Premieres from "@/components/Premieres/Premieres.vue";

export default {
  components: {
    Premieres,
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>