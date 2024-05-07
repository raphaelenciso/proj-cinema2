<script setup lang="ts">
import type { IMovie } from '@/types/movie.interface';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';
import formatRunTime from '@/utils/formatRunTime';
import showTimes from '@/utils/showTimes';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const { mobile } = useDisplay();
const route = useRoute();
const year = new Date().getFullYear();

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
    height="300"
  ></v-img>

  <v-container>
    <v-card class="movie-details">
      <v-card-title class="text-subtitle-1 text-md-h5">{{
        movieDetails?.title
      }}</v-card-title>

      <v-card-text class="text-subtitle-2">
        {{ movieDetails?.overview }}
      </v-card-text>

      <v-card-subtitle class="text-body-1"
        ><span class="text-body-2 text-grey">Run Time: </span>
        {{ formatRunTime(movieDetails?.runtime!) }}
      </v-card-subtitle>

      <v-card-subtitle>
        <span class="text-body-2 text-grey">Genres: </span>
        <span
          class="text-body-1"
          v-for="(genre, index) in movieDetails?.genres"
          :key="genre.id"
        >
          {{
            genre.name +
            (index == movieDetails?.genres.length! - 1 ? ' ' : ', ')
          }}
        </span>
      </v-card-subtitle>
    </v-card>

    <div class="text-h4 mt-8">SHOWTIMES</div>
    <v-card class="movie-schedules pt-4">
      <div
        v-for="date in movieDetails?.dates"
        :key="date.monthDay"
        class="mb-8"
      >
        <v-card-subtitle>
          {{
            date.dayName +
            ', ' +
            date.monthDay +
            ' ' +
            date.monthName +
            ' ' +
            year
          }}
        </v-card-subtitle>

        <div class="ml-4">
          <v-btn
            color="red"
            variant="outlined"
            :size="mobile ? 'small' : 'large'"
            v-for="showTime in showTimes"
            :key="showTime"
            class="me-2 mt-1"
            :to="`/movies/${route.params.id}?date=${
              date.monthName + '-' + date.monthDay + '-' + year
            }&time=${showTime}`"
          >
            {{ showTime }}
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped>
.movie-details,
.movie-schedules {
  border: 1px solid white;
}

.btn-grp {
  flex-wrap: wrap;
}
</style>
