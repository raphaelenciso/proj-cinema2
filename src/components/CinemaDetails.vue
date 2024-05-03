<script setup lang="ts">
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();

interface CinemaDetailsProps {
  image: string;
  cinema: string;
  title: string;
}

const { image, cinema, title } = defineProps<CinemaDetailsProps>();
</script>

<template>
  <v-card class="cinema-indiv || d-flex flex-column flex-md-row">
    <v-img :src="image" :height="mobile ? '250' : '350'" class="movie-img" />
    <v-container
      class="movie-details || d-flex flex-column align-center align-md-start"
    >
      <v-card-title class="text-h5 text-md-h4 p-0">{{ cinema }}</v-card-title>
      <v-card-title class="text-subtitle-1 text-md-h5">{{
        title
      }}</v-card-title>
      <v-card-subtitle> Monday, 13 March 2023 </v-card-subtitle>

      <v-btn-toggle class="pt-4 ml-md-3" divided variant="outlined" color="red">
        <v-btn :size="mobile ? 'x-small' : 'x-large'">12:30 PM</v-btn>
        <v-btn :size="mobile ? 'x-small' : 'x-large'">12:30 PM</v-btn>
        <v-btn :size="mobile ? 'x-small' : 'x-large'">12:30 PM</v-btn>
        <v-btn :size="mobile ? 'x-small' : 'x-large'">12:30 PM</v-btn>
      </v-btn-toggle>

      <v-btn class="d-block mt-4 ml-3" color="red">BOOK NOW</v-btn>
    </v-container>
  </v-card>
</template>

<style lang="scss" scoped>
.cinema-indiv {
  width: 100%;
  border: solid 1px white;

  // margin: 0 50px;
  padding: 20px;
  background-color: #121212;

  .movie-image {
    flex: 1;
  }

  .movie-details {
    flex: 3;
  }
}
</style>
