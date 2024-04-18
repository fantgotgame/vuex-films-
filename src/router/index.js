import { createRouter, createWebHistory } from 'vue-router'
import ViewTop from "@/views/ViewTop.vue";
import ViewSearchFilm from "@/views/ViewSearchFilm.vue";
import ViewHome from "@/views/ViewHome.vue";
import ViewPremieres from "@/views/ViewPremieres.vue";
import FilmInfo from "@/views/ViewFilmInfo.vue";

// Роуты
const routes = [
  {
    path: "/",
    name: "Home",
    component: ViewHome,
  },
  {
    path: "/top",
    name: "Top",
    component: ViewTop,
  },
  {
    path: "/search-film",
    name: "SearchFilm",
    component: ViewSearchFilm,
  },
  {
    path: "/premieres",
    name: "Premieres",
    component: ViewPremieres,
  },
  {
    path: "/film-info/:id",
    name: "FilmInfo",
    component: FilmInfo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
