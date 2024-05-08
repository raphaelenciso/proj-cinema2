<script setup lang="ts">
import { ref } from 'vue';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const emit = defineEmits(['switchTab']);

const formValid = ref(false);
const username = ref('');
const email = ref('');
const password = ref('');
const showPassword = ref(false);
const confirmPassword = ref('');
const showConfirmPassword = ref(false);
const errorMessage = ref('');
const loading = ref(false);

const generalRules = {
  required: (value: string) => !!value || 'Field is required',
  passwordMatch: () =>
    confirmPassword.value === password.value || 'Passwords does not match',
};

const usernameRules = [
  generalRules.required,
  (value: string) => {
    if (value.length >= 3) return true;
    return 'Username must be at least 3 characters';
  },
  (value: string) => {
    if (value.length <= 15) return true;
    return 'Username must be at most 15 characters';
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

const confirmPasswordRules = [
  generalRules.required,
  generalRules.passwordMatch,
];

const signUp = async () => {
  if (!formValid.value) return;

  errorMessage.value = '';
  loading.value = true;

  try {
    const res = await fetch(`${backendUrl}/api/auth/sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
      }),
    });
    const data = await res.json();

    // if there is an error
    if (!res.ok) {
      loading.value = false;

      if (data.code === 11000) {
        if (data.keyPattern.username) {
          errorMessage.value = 'username is taken';
        } else if (data.keyPattern.email) {
          errorMessage.value = 'email is already registered';
        }
      }
      return console.log(data);
    }

    console.log(data);
    username.value = '';
    email.value = '';
    password.value = '';
    confirmPassword.value = '';
    emit('switchTab', 'si');
  } catch (error: any) {
    console.log(error);
  }
  loading.value = false;
};
</script>

<template>
  <v-form v-model="formValid" @submit.prevent="signUp">
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

    <div class="text-body-1 text-red">{{ errorMessage }}</div>

    <v-btn
      type="submit"
      class="mb-8 mt-8"
      color="red"
      size="large"
      variant="tonal"
      block
      :loading="loading"
    >
      Sign Up
    </v-btn>
  </v-form>
</template>

<style scoped></style>
