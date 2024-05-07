<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Item</th>
        <th class="text-left">Cost</th>
        <th class="text-left">Qty</th>
        <th class="text-left">Seats</th>
        <th class="text-left">Subtotal</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>asd</td>
        <td>380</td>
        <td>{{ selectedSeats.length }}</td>
        <td>{{ selectedSeats.map((item) => item) }}</td>
        <td>{{ 380 * selectedSeats.length }}</td>
      </tr>

      <tr>
        <td></td>
        <td></td>
        <td>Total</td>
        <td></td>
        <td>P{{ 380 * selectedSeats.length }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts" setup>
interface Step3Props {
  selectedSeats: string[];
}

const { selectedSeats } = defineProps<Step3Props>();
</script>

<style scoped></style>
