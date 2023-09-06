<script setup lang="ts">
import HouseCardMenu from '@/components/HouseCardMenu.vue';

defineProps({
  house: {
    required: true,
    type: Object,
  }
})
</script>

<template>
  <v-card
    elevation="2"
    rounded="lg"
  >
    <div class="d-flex justify-space-between">
      <v-card-item
        :title="house.house_number"
        :subtitle="house.tenant?.name"
      ></v-card-item>

      <HouseCardMenu />
    </div>
  </v-card>
</template>
