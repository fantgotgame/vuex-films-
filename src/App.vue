<template>
  <Header/>
  <router-view/>
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
  background: #100e19;
}
#app {

}
</style>
