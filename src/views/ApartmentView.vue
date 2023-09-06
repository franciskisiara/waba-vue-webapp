<script setup lang="ts">
import BasePage from '@/components/BasePage.vue'
import ApartmentCreate from '@/components/ApartmentCreate.vue'
import ApartmentList from '@/components/ApartmentList.vue'
</script>

<template>
  <BasePage
    title="Apartments"
    action-text="Add apartment"
  >
    <template #content>
      <ApartmentCreate />

      <ApartmentList />
    </template>
  </BasePage>
</template>
