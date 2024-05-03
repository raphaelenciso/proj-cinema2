<script setup lang="ts">
import CinemaDetails from '@/components/CinemaDetails.vue';
import { nsPosters, csPosters } from '@/utils/movieDetails';
</script>

<template>
  <v-list class="cinemas-container">
    <v-list-item v-for="poster in nsPosters" :key="poster.title">
      <CinemaDetails
        :image="poster.url"
        cinema="CINEMA 1"
        :title="poster.title"
      />
    </v-list-item>
  </v-list>
</template>

<style scoped>
.cinemas-container {
  padding: 0 120px;
}
</style>
