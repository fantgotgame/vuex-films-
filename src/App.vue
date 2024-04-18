<template>
  <Header />
  <router-view />
<!--  Тестовая -->
</template>

<script>
import Header from "@/components/Header/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
body {
  background: #100e19;
}
</style>
