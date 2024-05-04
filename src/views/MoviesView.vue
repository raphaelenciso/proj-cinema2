<script setup lang="ts">
import MoviesCarousel from '@/components/MoviesCarousel.vue';
import { nsPosters, csPosters } from '@/utils/movieDetails';

import { ref } from 'vue';
import { useDisplay } from 'vuetify';

const tab = ref('ns');
const { mobile } = useDisplay();
</script>

<template>
  <div>
    <v-img src="/images/bg.jpg" height="200px" cover></v-img>
    <v-tabs
      bg-color="red"
      align-tabs="center"
      fixed-tabs
      :height="mobile ? 50 : 70"
      v-model="tab"
    >
      <v-tab value="ns">NOW SHOWING</v-tab>
      <v-tab value="cs">COMING SOON</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="ns">
        <MoviesCarousel :posters="nsPosters" title="" />
      </v-tabs-window-item>
      <v-tabs-window-item value="cs">
        <MoviesCarousel :posters="csPosters" title="" />
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<style lang="scss" scoped></style>
