<template>
  <v-card
    class="movie-details || d-flex flex-column flex-md-row align-center mt-4"
    max-width="1300"
  >
    <v-img
      :src="'https://image.tmdb.org/t/p/original' + movieDetails?.poster_path"
      :width="mobile ? 200 : 250"
    ></v-img>
    <div class="d-flex flex-column align-center align-md-start px-12">
      <div
        class="text-h4 text-md-h3 font-weight-bold pb-2 text-center text-md-left"
      >
        {{ movieDetails?.title }}
      </div>
      <div class="text-subtitle-1 text-md-h5 text-grey">
        {{ formatRunTime(movieDetails?.runtime!) }}
      </div>
      <div class="text-subtitle-1 py-3">
        <span v-for="(genre, index) in movieDetails?.genres" :key="genre.id">{{
          genre.name + (index == movieDetails?.genres.length! - 1 ? ' ' : ', ')
        }}</span>
      </div>
      <div class="text-body-1 pb-6 text-grey">
        {{ movieDetails?.overview }}
      </div>
      <div class="text-subtitle-1 text-md-h5 pb-6">
        Time: <span>{{ query.time }}</span>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import type { IMovie } from '@/types/movie.interface';
import formatRunTime from '@/utils/formatRunTime';
import type { LocationQuery } from 'vue-router';

interface Stepper1Props {
  movieDetails: IMovie | null;
  query: LocationQuery;
}

const { mobile } = useDisplay();
const { movieDetails, query } = defineProps<Stepper1Props>();
</script>

<style scoped></style>
