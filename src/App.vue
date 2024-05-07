<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@/components/Shared/MainHeader.vue';
import AuthDialog from '@/components/Auth/AuthDialog.vue';
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
