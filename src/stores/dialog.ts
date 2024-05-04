import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useDialogStore = defineStore('dialog', () => {
  const loginDialog = ref(false);

  function loginDialogOpen() {
    loginDialog.value = true;
  }

  function loginDialogClose() {
    loginDialog.value = false;
  }

  return { loginDialog, loginDialogOpen, loginDialogClose };
});
