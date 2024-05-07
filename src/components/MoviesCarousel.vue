<script lang="ts" setup>
import type { IMovie } from '@/types/movie.interface';

interface MoviesCarouselProps {
  movies: IMovie[];
  title?: string;
  withHeader?: boolean;
}

const { movies, title, withHeader } = defineProps<MoviesCarouselProps>();
</script>

<template>
  <v-container>
    <div class="py-4 d-flex align-center justify-space-between">
      <div class="text-h4 text-md-h3 font-weight-bold" v-if="withHeader">
        {{ title }}
      </div>

      <v-btn
        color="red"
        append-icon="mdi-chevron-right-circle-outline"
        variant="text"
        v-if="withHeader"
        to="/movies"
      >
        See More
      </v-btn>
    </div>

    <v-container
      class="movie-container || d-flex justify-center justify-md-start flex-wrap"
    >
      <RouterLink
        :to="'/movie-schedule/' + movie.id"
        v-for="movie in movies"
        :key="movie.id"
        class="movie-item"
      >
        <v-img
          cover
          :src="'https://image.tmdb.org/t/p/original' + movie.poster_path"
          class="mb-2"
        />
        <div class="movie-title || text-subtitle-1 text-center">
          {{ movie.title }}
        </div>
      </RouterLink>
    </v-container>
  </v-container>
</template>

<style lang="scss" scoped>
.movie-container {
  gap: 20px;
  padding: 0;
  padding-top: 3px;

  .movie-item {
    width: 270px;
    height: auto;
    text-decoration: none;
    color: white;
    transition: all 0.2s ease-in-out;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (max-width: 700px) {
      & {
        width: 165px;
      }
    }

    &:hover {
      scale: 1.05;
    }
  }
}
</style>
