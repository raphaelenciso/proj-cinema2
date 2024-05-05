<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';

const date = ref('1');
const { mobile } = useDisplay();
</script>

<template>
  <div class="movie-details-page || d-flex flex-column align-center px-6">
    <v-btn-toggle
      divided
      color="red-darken-4"
      v-model="date"
      height="100"
      class="btn-grp || my-8"
      variant="outlined"
    >
      <v-btn
        v-for="item in [1, 2, 3, 4, 5, 6, 7]"
        :key="item"
        :height="mobile ? 80 : 100"
        :width="mobile ? 100 : 120"
      >
        <div class="d-flex flex-column">
          <div class="text-caption text-sm-subtitle-1">Jan</div>
          <div class="text-h5 text-sm-h4 font-weight-bold">20</div>
          <div class="text-caption text-sm-subtitle-2">Monday</div>
        </div>
      </v-btn>
    </v-btn-toggle>

    <v-card
      class="movie-details || d-flex flex-column flex-md-row align-center mt-4"
    >
      <v-img
        src="https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_.jpg"
        :width="mobile ? 200 : 250"
      ></v-img>
      <div class="d-flex flex-column align-center align-md-start px-12">
        <div
          class="text-h4 text-md-h3 font-weight-bold pb-2 text-center text-md-left"
        >
          The Amazing Spider-Man
        </div>
        <div class="text-subtitle-1 text-md-h5 pb-6 text-grey">3h 10min PG</div>
        <div class="text-subtitle-1 text-md-h5 pb-6">
          Time: <span>12:30PM</span>
        </div>
        <v-btn color="red" variant="flat" :size="mobile ? 'default' : 'large'"
          >CHOOSE YOUR SEAT</v-btn
        >
      </div>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.movie-details-page {
  height: 100%;
  background-image: url('/images/bg.jpg');
  background-size: cover;
  background-position: center;

  .btn-grp {
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }

  .movie-details {
    gap: 20px;
    background-color: #000000af;
  }
}
</style>
