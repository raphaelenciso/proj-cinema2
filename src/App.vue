<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/MainHeader.vue';
</script>

<template>
  <v-app>
    <Header></Header>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped></style>
