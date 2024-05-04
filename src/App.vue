<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@/components/MainHeader.vue';
import AuthDialog from '@/components/AuthDialog.vue';
</script>

<template>
  <v-app>
    <Header></Header>

    <v-main>
      <RouterView />
    </v-main>

    <AuthDialog />
  </v-app>
</template>

<style scoped></style>
