<template>
  <header>
    <div class="header-menu">
      <ul class="header-menu__list">
        <li class="header-menu__item">
          <router-link to="/">Главная</router-link>
        </li>
        <li class="header-menu__item">
          <router-link to="/top">Топ 250 фильмов</router-link>
        </li>
        <li class="header-menu__item">
          <router-link to="/search-film">Поиск фильма</router-link>
        </li>
        <li class="header-menu__item">
          <router-link to="/premieres">Премьеры фильмов</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped lang="scss">
header {
  padding: 20px 0;
}
.header-menu {
  &__list {
    display: flex;
    justify-content: center;
  }
  &__item {
    list-style-type: none;
    padding: 20px;
  }
}
</style>
