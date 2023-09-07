<script setup lang="ts">
import BasePage from '@/components/BasePage.vue'
import ApartmentCreate from '@/components/ApartmentCreate.vue'
import HouseList from '@/components/HouseList.vue'
</script>

<template>
  <BasePage
    title="Houses"
    action-text="Add house"
  >
    <template #content>
      <ApartmentCreate />

      <HouseList />
    </template>
  </BasePage>
</template>
