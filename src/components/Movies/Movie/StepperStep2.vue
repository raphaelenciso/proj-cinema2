<script setup lang="ts">
import seats from '@/utils/seats';
import { ref } from 'vue';
import { useDisplay } from 'vuetify';

const emit = defineEmits(['setSelectedSeats']);
const { mobile } = useDisplay();
const seatPlan = ref<any>(seats);

const isSeatSelected = (rowIndex: number, seatIndex: number): boolean => {
  const seat = seatPlan.value[rowIndex][seatIndex];
  return seat && seat.selected;
};

const toggleSeat = (rowIndex: number, seatIndex: number): void => {
  const seat = seatPlan.value[rowIndex][seatIndex];
  if (seat) {
    seat.selected = !seat.selected;
    emit('setSelectedSeats', seat);
  }
};
</script>

<template>
  <div>
    <div class="screen">Screen</div>
    <div v-for="(row, rowIndex) in seatPlan" :key="rowIndex" class="row">
      <div
        v-for="(seat, seatIndex) in row"
        :key="seatIndex"
        :class="`${mobile ? 'mx-0' : 'mx-1'} ${seat === null && 'aisle'}`"
      >
        <v-btn
          v-if="seat"
          :class="{ 'seat-selected': isSeatSelected(rowIndex, seatIndex) }"
          @click="toggleSeat(rowIndex, seatIndex)"
          :size="mobile ? 'x-small' : 'default'"
        >
          {{ seat.name }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.screen {
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 24px;
}
.v-btn.seat-selected {
  background-color: #f44336;
  color: #fff;
}
.v-btn.seat-reserved {
  background-color: #919191;
  color: #fff;
}
.aisle {
  visibility: hidden;
}
</style>
