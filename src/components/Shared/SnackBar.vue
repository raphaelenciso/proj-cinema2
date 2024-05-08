<template>
  <v-snackbar
    v-model="snackbar.snackbar"
    :timeout="3000"
    color="green"
    elevation="24"
    location="top right"
  >
    {{ snackbar.message }}
  </v-snackbar>
</template>

<script setup lang="ts">
import { useSnackbarStore } from '@/stores/snackbar';

const snackbar = useSnackbarStore();
</script>

<style scoped></style>
