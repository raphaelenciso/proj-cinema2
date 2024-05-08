<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { useDialogStore } from '@/stores/dialog';
import { useSnackbarStore } from '@/stores/snackbar';
import { ref } from 'vue';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const required = (value: string) => !!value || 'Field is required';

const dialog = useDialogStore();
const snackbar = useSnackbarStore();
const auth = useAuthStore();

const showPassword = ref(false);
const formValid = ref(false);
const email = ref('');
const password = ref('');
const loading = ref(false);
const errorMessage = ref('');
const snackBarShow = ref(false);

const signIn = async () => {
  if (!formValid.value) return;

  errorMessage.value = '';
  loading.value = true;

  try {
    const res = await fetch(`${backendUrl}/api/auth/sign-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const data = await res.json();

    // if there is an error
    if (!res.ok) {
      loading.value = false;
      return (errorMessage.value = data);
    }

    email.value = '';
    password.value = '';

    auth.login(data);
    snackbar.show({ message: 'Sign in successful!' });
    dialog.loginDialogClose();
  } catch (error: any) {
    console.log(error);
  }
  loading.value = false;
};
</script>

<template>
  <v-form v-model="formValid" @submit.prevent="signIn">
    <div class="text-subtitle-1 text-medium-emphasis">Email</div>
    <v-text-field
      v-model="email"
      density="compact"
      placeholder="Email address"
      prepend-inner-icon="mdi-email-outline"
      :rules="[required]"
      variant="outlined"
    ></v-text-field>

    <div
      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
    >
      Password
      <a
        class="text-caption text-decoration-none text-red-darken-1"
        href="#"
        rel="noopener noreferrer"
        target="_blank"
      >
        Forgot login password?</a
      >
    </div>

    <v-text-field
      density="compact"
      placeholder="Enter your password"
      prepend-inner-icon="mdi-lock-outline"
      :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      variant="outlined"
      :type="showPassword ? 'text' : 'password'"
      @click:append-inner="showPassword = !showPassword"
      v-model="password"
      :rules="[required]"
    ></v-text-field>

    <div class="text-body-1 text-red">{{ errorMessage }}</div>

    <v-btn
      class="mb-8 mt-8"
      color="red"
      size="large"
      variant="tonal"
      type="submit"
      block
    >
      Sign In
    </v-btn>
  </v-form>

  <v-snackbar
    v-model="snackBarShow"
    :timeout="5000"
    color="green"
    elevation="24"
    location="top right"
  >
    Sign in successful!
  </v-snackbar>
</template>

<style scoped></style>
