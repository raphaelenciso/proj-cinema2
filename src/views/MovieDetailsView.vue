<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { IMovie } from '@/types/movie.interface';
import StepperStep1 from '@/components/Movies/Movie/StepperStep1.vue';
import StepperStep2 from '@/components/Movies/Movie/StepperStep2.vue';
import StepperStep3 from '@/components/Movies/Movie/StepperStep3.vue';
import { useAuthStore } from '@/stores/auth';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const { params, query } = useRoute();
const router = useRouter();
const auth = useAuthStore();

const movieDetails = ref<IMovie | null>(null);
const step = ref(1);
const items = ['Movie Details', 'Select Seats', 'Confirm'];

const getMoveDetails = async () => {
  try {
    const res = await fetch(`${backendUrl}/api/movies/${params.id}`);
    movieDetails.value = await res.json();
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getMoveDetails();
  console.log(movieDetails.value);
});

const selectedSeats = ref<string[]>([]);

const setSelectedSeats = (seat: any) => {
  if (seat.selected) {
    selectedSeats.value.push(seat.name);
  } else {
    let index = selectedSeats.value.indexOf(seat.name);
    if (index !== -1) {
      selectedSeats.value.splice(index, 1);
    }
  }
};

const bookSeats = () => {
  console.log(auth.user!.id);
  console.log(selectedSeats.value);
  console.log(params.id);

  // const res = await fetch(`${backendUrl}/api/auth/sign-up`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       username: username.value,
  //       email: email.value,
  //       password: password.value,
  //     }),
  //   });
};
</script>

<template>
  <div
    class="movie-details-page || d-flex flex-column align-center justify-center px-6"
  >
    <v-stepper v-model="step" :items="items" show-actions>
      <template v-slot:item.1>
        <StepperStep1 :movieDetails="movieDetails" :query="query" />
      </template>

      <template v-slot:item.2>
        <StepperStep2
          :selectedSeats="selectedSeats"
          @setSelectedSeats="setSelectedSeats"
        />
      </template>

      <template v-slot:item.3>
        <StepperStep3 :selectedSeats="selectedSeats" />
      </template>

      <template v-slot:next>
        <v-btn @click="step++" v-if="step !== 3">Next</v-btn>
        <v-btn @click="bookSeats" v-else :disabled="false">Submit</v-btn>
      </template>
    </v-stepper>
  </div>
</template>

<style lang="scss" scoped>
.movie-details-page {
  height: 100%;
  background-image: url('/images/bg.jpg');
  background-size: cover;
  background-position: center;

  .btn-grp {
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }

  .movie-details {
    gap: 20px;
  }
}
</style>
