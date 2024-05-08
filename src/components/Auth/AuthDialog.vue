<script setup lang="ts">
import { useDialogStore } from '@/stores/dialog';
import { ref } from 'vue';
import SignUpForm from './SignUpForm.vue';
import SignInForm from './SignInForm.vue';

const dialog = useDialogStore();
const tab = ref('si');
const snackBarShow = ref(false);

const switchTab = (newTab: string) => {
  console.log(newTab);
  tab.value = newTab;
  snackBarShow.value = true;
};
</script>

<template>
  <v-dialog
    v-model="dialog.loginDialog"
    transition="dialog-bottom-transition"
    max-width="450"
  >
    <v-card class="mx-auto pa-12 pb-8" elevation="8" rounded="md" width="100%">
      <v-tabs
        align-tabs="center"
        fixed-tabs
        v-model="tab"
        color="red"
        class="mb-4"
      >
        <v-tab value="si">Sign In</v-tab>
        <v-tab value="su">Sign Up</v-tab>
      </v-tabs>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="si">
          <SignInForm />
        </v-tabs-window-item>
        <v-tabs-window-item value="su">
          <SignUpForm @switchTab="switchTab" />
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
  </v-dialog>

  <v-snackbar
    v-model="snackBarShow"
    :timeout="5000"
    color="green"
    elevation="24"
    location="top right"
  >
    Sign up successful!
  </v-snackbar>
</template>

<style scoped></style>
