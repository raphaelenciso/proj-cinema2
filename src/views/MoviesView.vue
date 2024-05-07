<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useDisplay } from 'vuetify';
import MoviesCarousel from '@/components/Shared/MoviesCarousel.vue';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const { mobile } = useDisplay();

const tab = ref('ns');
const nowShowingMovies = ref([]);
const comingSoonMovies = ref([]);
const nowShowingPage = ref(1);
const comingSoonPage = ref(1);
const nowShowingTotalPages = ref(null);
const comingSoonTotalPages = ref(null);

const getNowShowingMovies = async (page: number) => {
  try {
    const res = await fetch(
      `${backendUrl}/api/movies/now-showing?page=${page}`
    );

    const nowShowing = await res.json();
    nowShowingMovies.value = nowShowing.results;
    nowShowingTotalPages.value = nowShowing.total_pages;
  } catch (error) {
    console.log(error);
  }
};

const getComingsoonMovies = async (page: number) => {
  try {
    const res = await fetch(
      `${backendUrl}/api/movies/coming-soon?page=${page}`
    );

    const comingSoon = await res.json();
    comingSoonMovies.value = comingSoon.results;
    comingSoonTotalPages.value = comingSoon.total_pages;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getNowShowingMovies(nowShowingPage.value);
  getComingsoonMovies(comingSoonPage.value);
});

watch(nowShowingPage, (newPage) => {
  getNowShowingMovies(newPage);
});

watch(nowShowingPage, (newPage) => {
  getNowShowingMovies(newPage);
});
</script>

<template>
  <div>
    <v-img src="/images/bg.jpg" height="200px" cover></v-img>
    <v-tabs
      align-tabs="center"
      fixed-tabs
      :height="mobile ? 50 : 70"
      v-model="tab"
      width="500px"
      color="red"
    >
      <v-tab value="ns">NOW SHOWING</v-tab>
      <v-tab value="cs">COMING SOON</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="ns">
        <MoviesCarousel :movies="nowShowingMovies" />
        <v-pagination
          v-model="nowShowingPage"
          v-if="nowShowingTotalPages"
          :length="nowShowingTotalPages"
          color="red"
        ></v-pagination>
      </v-tabs-window-item>
      <v-tabs-window-item value="cs">
        <MoviesCarousel :movies="comingSoonMovies" />
        <v-pagination
          v-model="comingSoonPage"
          v-if="comingSoonTotalPages"
          :length="comingSoonTotalPages"
          color="red"
        ></v-pagination>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<style lang="scss" scoped></style>
