<script setup lang="ts">
import type { IMovie } from '@/types/movie.interface';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const { mobile } = useDisplay();
const route = useRoute();

const movieDetails = ref<IMovie | null>(null);

const getMoveDetails = async () => {
  try {
    const res = await fetch(`${backendUrl}/api/movies/${route.params.id}`);
    movieDetails.value = await res.json();
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getMoveDetails();
  console.log(movieDetails.value);
});
</script>

<template>
  <v-img
    :src="'https://image.tmdb.org/t/p/original' + movieDetails?.backdrop_path"
    cover
    width="100%"
    height="600"
  ></v-img>

  <v-card class="movie-details || d-flex flex-column flex-md-row">
    <!-- <v-card-title class="text-h5 text-md-h4 p-0">{{  }}</v-card-title> -->
    <v-card-title class="text-subtitle-1 text-md-h5">{{
      movieDetails?.title
    }}</v-card-title>
    <v-card-title class="text-subtitle-1 text-md-h5">
      {{ movieDetails?.overview }}</v-card-title
    >
    <v-card-title class="text-subtitle-1 text-md-h5"
      >Run Time: {{ movieDetails?.overview }}</v-card-title
    >
    <v-card-title class="text-subtitle-1 text-md-h5"
      >Genres: {{ movieDetails?.overview }}</v-card-title
    >
  </v-card>

  <v-card>
    <v-card-subtitle> Monday, 13 March 2023 </v-card-subtitle>

    <v-btn-toggle class="pt-4 ml-md-3" divided variant="outlined" color="red">
      <v-btn :size="mobile ? 'x-small' : 'x-large'">10:30 AM</v-btn>
      <v-btn :size="mobile ? 'x-small' : 'x-large'">1:00 PM</v-btn>
      <v-btn :size="mobile ? 'x-small' : 'x-large'">4:30 PM</v-btn>
      <v-btn :size="mobile ? 'x-small' : 'x-large'">7:00 PM</v-btn>
    </v-btn-toggle>
  </v-card>
</template>

<style lang="scss" scoped>
.movie-details {
  border: 1px solid white;
}
</style>
