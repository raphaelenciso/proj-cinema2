<template>
  <v-snackbar v-model="show" :timeout="5000" color="green" elevation="24">
    {{ message }}
  </v-snackbar>
</template>

<script setup lang="ts">
interface SnackBarProps {
  show: boolean;
  message: string;
}

const { show, message } = defineProps<SnackBarProps>();
</script>

<style scoped></style>
