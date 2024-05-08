import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSnackbarStore = defineStore('snackbar', () => {
  const snackbar = ref(false);
  const message = ref('');

  function show(data: any) {
    snackbar.value = true;
    message.value = data.message;
  }

  return { snackbar, message, show };
});
