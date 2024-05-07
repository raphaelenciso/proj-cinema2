<script setup lang="ts">
import { ref } from 'vue';

const username = ref('');
const email = ref('');
const password = ref('');
const showPassword = ref(false);
const confirmPassword = ref('');
const showConfirmPassword = ref(false);

const generalRules = {
  required: (value: string) => !!value || 'Field is required',
  passwordMatch: () =>
    confirmPassword.value === password.value || 'Passwords does not match',
};

const usernameRules = [
  generalRules.required,
  (value: string) => {
    if (value.length > 3) return true;
    return 'Username must be at least 3 characters';
  },
];

const emailRules = [
  generalRules.required,
  (value: string) =>
    !value ||
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
    'Email must be valid',
];

const passwordRules = [
  generalRules.required,
  (value: string) =>
    !value ||
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/.test(value) ||
    'Password must be at least 8 characters and have 1 digit',
];

const confirmPasswordRules = [generalRules.passwordMatch];

const signUp = () => {
  console.log(username.value);
};
</script>

<template>
  <v-form @submit.prevent="signUp">
    <div class="text-subtitle-1 text-medium-emphasis">Username</div>
    <v-text-field
      v-model="username"
      density="compact"
      placeholder="Username"
      prepend-inner-icon="mdi-account"
      :rules="usernameRules"
      variant="outlined"
    ></v-text-field>

    <div class="text-subtitle-1 text-medium-emphasis">Email</div>
    <v-text-field
      v-model="email"
      density="compact"
      placeholder="Email address"
      prepend-inner-icon="mdi-email-outline"
      variant="outlined"
      :rules="emailRules"
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
      :rules="passwordRules"
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
      prepend-inner-icon="mdi-lock-check-outline"
      variant="outlined"
      @click:append-inner="showConfirmPassword = !showConfirmPassword"
      :rules="confirmPasswordRules"
    ></v-text-field>

    <v-btn
      type="submit"
      class="mb-8 mt-8"
      color="red"
      size="large"
      variant="tonal"
      block
    >
      Sign Up
    </v-btn>
  </v-form>
</template>

<style scoped></style>
