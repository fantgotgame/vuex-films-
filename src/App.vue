<template>
  <Header/>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
body {
  background: azure;
}
#app {

}
.container {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
