<template>
  <v-card class="cinema-indiv || d-flex">
    <v-img :src="image" class="movie-img"> </v-img>
    <v-container class="movie-details">
      <v-card-title class="text-h5 p-0">{{ cinema }}</v-card-title>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle> Monday, 13 March 2023 </v-card-subtitle>

      <v-btn-toggle class="pt-4 ml-3">
        <v-btn variant="outlined">12:30 PM</v-btn>
        <v-btn variant="outlined">12:30 PM</v-btn>
        <v-btn variant="outlined">12:30 PM</v-btn>
        <v-btn variant="outlined">12:30 PM</v-btn>
      </v-btn-toggle>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
interface CinemaDetailsProps {
  image: string;
  cinema: string;
  title: string;
}

const { image, cinema, title } = defineProps<CinemaDetailsProps>();
</script>

<style lang="scss" scoped>
.cinema-indiv {
  width: 100%;
  border: solid 1px white;
  // margin: 0 50px;
  padding: 20px;
  gap: 20px;

  .movie-image {
    // height: 100%;
    // width: 200px;
    // flex: 1;
  }

  .movie-details {
    // flex: 1;
  }
}
</style>
