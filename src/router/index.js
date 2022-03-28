import { createRouter, createWebHistory } from 'vue-router'
import Top from "@/views/Top.vue";
import SearchFilm from "@/views/SearchFilm.vue";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/top",
    name: "Top",
    component: Top,
  },
  {
    path: "/search-film",
    name: "SearchFilm",
    component: SearchFilm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
