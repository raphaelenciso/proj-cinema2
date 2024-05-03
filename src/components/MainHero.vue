<script setup lang="ts"></script>

<template>
  <div
    class="hero || d-flex flex-column justify-center align-center align-md-start"
  >
    <div class="text-h3 text-md-h2 text-center font-weight-bold">
      Welcome to CINEMA
    </div>
    <div class="text-subtitle-1">Experience that best, at your reach</div>
    <v-btn color="red" to="/cinemas" class="mt-2">Book Now</v-btn>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  height: calc(100vh - 64px);
  background-image: url('/images/bg.jpg');
  background-size: cover;
  background-position: center;

  a {
    padding: 10px 100px 30px;
  }

  @media screen and (min-width: 600px) {
    & {
      padding: 0 120px;
    }
  }
}
</style>
