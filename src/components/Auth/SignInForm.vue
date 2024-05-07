<script setup lang="ts">
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { reactive, ref } from 'vue';

const state = reactive({
  email: '',
  password: '',
});

const showPassword = ref(false);

const rules = {
  email: { required },
  password: { required },
};

const v$ = useVuelidate(rules, state);
</script>

<template>
  <div class="text-subtitle-1 text-medium-emphasis">Email</div>
  <v-text-field
    density="compact"
    placeholder="Email address"
    prepend-inner-icon="mdi-email-outline"
    variant="outlined"
    v-model="state.email"
    :error-messages="v$.email.$errors.map((e: any) => e.$message)"
    label="Email"
    required
    @blur="v$.email.$touch"
    @input="v$.email.$touch"
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
    v-model="state.password"
    :error-messages="v$.password.$errors.map((e:any) => e.$message)"
    label="Password"
    required
    @blur="v$.password.$touch"
    @input="v$.password.$touch"
  ></v-text-field>

  <v-btn
    @click="v$.validate"
    class="mb-8 mt-8"
    color="red"
    size="large"
    variant="tonal"
    block
  >
    Sign In
  </v-btn>
</template>

<style scoped></style>
