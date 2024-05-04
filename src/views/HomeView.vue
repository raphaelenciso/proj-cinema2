<script setup lang="ts">
import MainHero from '../components/MainHero.vue';
import MoviesCarousel from '../components/MoviesCarousel.vue';
import { nsPosters, csPosters } from '@/utils/movieDetails';
</script>

<template>
  <main>
    <MainHero />
    <MoviesCarousel :posters="nsPosters" title="NOW SHOWING" with-header />
    <MoviesCarousel :posters="csPosters" title="COMING SOON" with-header />
  </main>
</template>

<style scoped></style>
