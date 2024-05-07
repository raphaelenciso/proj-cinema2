<template>
  <v-dialog v-model="confirmation" width="auto">
    <v-card
      max-width="400"
      prepend-icon="mdi-update"
      text="Your application will relaunch automatically after the update is complete."
      title="Update in progress"
    >
      <template v-slot:actions>
        <v-btn class="ms-auto" text="Ok" @click="confirm"></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
interface DialogProps {
  confirmation: boolean;
}

const { confirmation } = defineProps<DialogProps>();
</script>

<style lang="scss" scoped></style>
