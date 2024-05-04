<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const showPassword = ref(false);

const rules = {
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => v.length >= 8 || 'Min 8 characters',
  // passwordMatch: () =>
  //   confirmPassword.value === password.value || 'Passwords does not match',
};
</script>

<template>
  <div class="text-subtitle-1 text-medium-emphasis">Email</div>
  <v-text-field
    density="compact"
    placeholder="Email address"
    prepend-inner-icon="mdi-email-outline"
    variant="outlined"
  ></v-text-field>

  <div
    class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
  >
    Password
    <a
      class="text-caption text-decoration-none text-blue"
      href="#"
      rel="noopener noreferrer"
      target="_blank"
    >
      Forgot login password?</a
    >
  </div>

  <v-text-field
    :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
    :type="showPassword ? 'text' : 'password'"
    density="compact"
    placeholder="Enter your password"
    prepend-inner-icon="mdi-lock-outline"
    variant="outlined"
    @click:append-inner="showPassword = !showPassword"
  ></v-text-field>

  <v-btn class="mb-8" color="blue" size="large" variant="tonal" block>
    Sign In
  </v-btn>
</template>

<style scoped></style>
