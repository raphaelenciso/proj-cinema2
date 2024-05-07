<script setup lang="ts">
import CinemaDetails from '@/components/Cinemas/CinemaDetails.vue';
import { nsPosters } from '@/utils/movieDetails';
</script>

<template>
  <v-list class="cinemas-container">
    <v-list-item
      class="cinema-item"
      v-for="poster in nsPosters"
      :key="poster.title"
    >
      <CinemaDetails
        :image="poster.url"
        cinema="CINEMA 1"
        :title="poster.title"
      />
    </v-list-item>
  </v-list>
</template>

<style lang="scss" scoped>
.cinemas-container {
  margin: 0 auto;
  background-color: #121212;

  @media screen and (min-width: 600px) {
    & {
      max-width: 1280px;
    }
  }
}
</style>
