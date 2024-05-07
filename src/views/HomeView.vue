<script setup lang="ts">
import { onMounted, ref } from 'vue';
import MainHero from '../components/MainHero.vue';
import MoviesCarousel from '../components/MoviesCarousel.vue';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const nowShowingMovies = ref([]);
const comingSoonMovies = ref([]);

console.log(backendUrl);

const getMovies = async () => {
  try {
    const res = await fetch(`${backendUrl}/api/movies/now-showing?page=1`);
    const res2 = await fetch(`${backendUrl}/api/movies/coming-soon?page=1`);

    const nowShowing = await res.json();
    const comingSoon = await res2.json();

    nowShowingMovies.value = nowShowing.results;
    comingSoonMovies.value = comingSoon.results;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getMovies();
});
</script>

<template>
  <main>
    <MainHero />
    <MoviesCarousel
      :movies="nowShowingMovies?.slice(0, 8)"
      title="NOW SHOWING"
      with-header
    />
    <MoviesCarousel
      :movies="comingSoonMovies?.slice(0, 8)"
      title="COMING SOON"
      with-header
    />
  </main>
</template>

<style scoped></style>
