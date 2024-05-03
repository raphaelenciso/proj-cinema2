<script setup lang="ts">
import Hero from '../components/MainHero.vue';
import MoviesCarousel from '../components/MoviesCarousel.vue';
import { nsPosters, csPosters } from '@/utils/movieDetails';
</script>

<template>
  <main>
    <Hero />
    <MoviesCarousel :posters="nsPosters" title="NOW SHOWING" />
    <MoviesCarousel :posters="csPosters" title="COMING SOON" />
  </main>
</template>

<style scoped></style>
