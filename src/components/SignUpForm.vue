<script setup lang="ts">
import { ref } from 'vue';

const username = ref('');
const email = ref('');
const password = ref('');
const showPassword = ref(false);
const confirmPassword = ref('');
const showConfirmPassword = ref(false);

const rules = {
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => v.length >= 8 || 'Min 8 characters',
  passwordMatch: () =>
    confirmPassword.value === password.value || 'Passwords does not match',
};
</script>

<template>
  <div class="text-subtitle-1 text-medium-emphasis">Username</div>
  <v-text-field
    v-model="username"
    density="compact"
    placeholder="Username"
    prepend-inner-icon="mdi-account"
    variant="outlined"
  ></v-text-field>

  <div class="text-subtitle-1 text-medium-emphasis">Email</div>
  <v-text-field
    v-model="email"
    density="compact"
    placeholder="Email address"
    prepend-inner-icon="mdi-email-outline"
    variant="outlined"
  ></v-text-field>

  <div
    class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
  >
    Password
  </div>
  <v-text-field
    v-model="password"
    :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
    :type="showPassword ? 'text' : 'password'"
    density="compact"
    placeholder="Enter your password"
    prepend-inner-icon="mdi-lock-outline"
    variant="outlined"
    @click:append-inner="showPassword = !showPassword"
  ></v-text-field>

  <div
    class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
  >
    Confirm Password
  </div>
  <v-text-field
    v-model="confirmPassword"
    :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
    :type="showConfirmPassword ? 'text' : 'password'"
    density="compact"
    placeholder="Confirm your password"
    prepend-inner-icon="mdi-lock-outline"
    variant="outlined"
    @click:append-inner="showConfirmPassword = !showConfirmPassword"
  ></v-text-field>

  <v-btn class="mb-8" color="primary" size="large" variant="tonal" block>
    Sign Up
  </v-btn>
</template>

<style scoped></style>
