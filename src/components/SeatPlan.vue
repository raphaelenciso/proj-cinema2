<template>
  <div>
    <div class="screen">Screen</div>
    <div v-for="(row, rowIndex) in seatPlan" :key="rowIndex" class="row">
      <div
        v-for="(seat, seatIndex) in row"
        :key="seatIndex"
        class="seat"
        :class="{ aisle: seat === null }"
      >
        <v-btn
          v-if="seat"
          :class="{ 'seat-selected': isSeatSelected(rowIndex, seatIndex) }"
          @click="toggleSeat(rowIndex, seatIndex)"
          text
        >
          {{ seat.name }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Seat {
  name: string;
  selected: boolean;
}

const seatPlan = ref<Seat[][]>([
  [
    null,
    null,
    { name: 'A2', selected: false },
    { name: 'A', selected: false },
    { name: 'A3', selected: false },
    null,
    { name: 'A4', selected: false },
    { name: 'A5', selected: false },
    { name: 'A6', selected: false },
    null,
    null,
  ],
  [
    null,
    { name: 'B1', selected: false },
    { name: 'B2', selected: false },
    { name: 'B3', selected: false },
    { name: 'B4', selected: false },
    null,
    { name: 'B5', selected: false },
    { name: 'B6', selected: false },
    { name: 'B7', selected: false },
    { name: 'B8', selected: false },
    null,
  ],
  [
    { name: 'B1', selected: false },
    { name: 'B1', selected: false },
    { name: 'B2', selected: false },
    { name: 'B3', selected: false },
    { name: 'B4', selected: false },
    null,
    { name: 'B1', selected: false },
    { name: 'B5', selected: false },
    { name: 'B6', selected: false },
    { name: 'B7', selected: false },
    { name: 'B8', selected: false },
  ],
  [
    { name: 'B1', selected: false },
    { name: 'B1', selected: false },
    { name: 'B2', selected: false },
    { name: 'B3', selected: false },
    { name: 'B4', selected: false },
    null,
    { name: 'B1', selected: false },
    { name: 'B5', selected: false },
    { name: 'B6', selected: false },
    { name: 'B7', selected: false },
    { name: 'B8', selected: false },
  ],
  [
    { name: 'B1', selected: false },
    { name: 'B1', selected: false },
    { name: 'B2', selected: false },
    { name: 'B3', selected: false },
    { name: 'B4', selected: false },
    null,
    { name: 'B1', selected: false },
    { name: 'B5', selected: false },
    { name: 'B6', selected: false },
    { name: 'B7', selected: false },
    { name: 'B8', selected: false },
  ],
  [
    { name: 'B1', selected: false },
    { name: 'B1', selected: false },
    { name: 'B2', selected: false },
    { name: 'B3', selected: false },
    { name: 'B4', selected: false },
    null,
    { name: 'B1', selected: false },
    { name: 'B5', selected: false },
    { name: 'B6', selected: false },
    { name: 'B7', selected: false },
    { name: 'B8', selected: false },
  ],
  // Add more rows as needed
]);

const isSeatSelected = (rowIndex: number, seatIndex: number): boolean => {
  const seat = seatPlan.value[rowIndex][seatIndex];
  return seat && seat.selected;
};

const toggleSeat = (rowIndex: number, seatIndex: number): void => {
  const seat = seatPlan.value[rowIndex][seatIndex];
  if (seat) {
    seat.selected = !seat.selected;
  }
};
</script>

<style scoped>
.row {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.seat {
  margin: 5px;
}
.screen {
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 24px;
}
.v-btn.seat-selected {
  background-color: #f48fb1;
  color: #fff;
}
.aisle {
  visibility: hidden;
}
</style>
