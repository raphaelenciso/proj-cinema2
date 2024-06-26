import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CinemasView from '@/views/CinemasView.vue';
import MoviesView from '@/views/MoviesView.vue';
import MovieDetailsView from '@/views/MovieDetailsView.vue';
import MovieScheduleView from '../views/MovieScheduleView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cinemas',
      name: 'cinemas',
      component: CinemasView,
    },
    {
      path: '/movie-schedule/:id',
      name: 'movie-schedule',
      component: MovieScheduleView,
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesView,
    },
    {
      path: '/movies/:id',
      name: 'movie',
      component: MovieDetailsView,
    },
  ],
});

export default router;
