<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useHttp } from '@/composables/http';
import HouseCard from '@/components/HouseCard.vue';

const route = useRoute()
const http = useHttp()
const houses: any = ref([])

onMounted(() => {
  http.request({
    method: 'get',
    url: `apartments/${ route.params.apartmentUid }/houses`,
  })
    .then((response) => {
      houses.value = response
    })
})
</script>

<template>
  <div
    v-if="houses.data?.length === 0"
    class="d-flex h-100 flex-column justify-center align-center px-3"
  >
    <div class="text-center">
      <v-img
        src="/no-connection.png"
        height="60"
        width="60"
        class="mx-auto mb-3"
      ></v-img>
      <p class="text-h5 font-weight-bold">
        No Houses Found
      </p>
      <p>In order to continue, add a house using the button above</p>
    </div>
  </div>

  <!-- <HouseCard
    v-for="(house, i) in (data as any)"
    :key="`house-card-${i}`"
    :house="house"
  /> -->
  <!-- <v-card


    class="mx-auto"
    max-width="368"
  >
    <div class="d-flex justify-space-between">
      <v-card-item
        :title="`Door: ${house.house_number}`"
        :subtitle="`${house.tenant?.name} - ${house.tenant?.phone}`"
      ></v-card-item>

      <v-btn
        :icon="`${house.tenant ? 'mdi-magnify': 'mdi-trash'}`"
        size="large"
        color="primary"
        class="mt-2 mr-2 text-body-2"
      ></v-btn>
    </div>

    <v-expand-transition>
      <div v-if="mob.expand">
        <div class="py-2">
          <v-slider
            v-model="mob.time"
            :max="6"
            :step="1"
            :ticks="mob.labels"
            class="mx-4"
            color="primary"
            density="compact"
            hide-details
            show-ticks="always"
            thumb-size="10"
          ></v-slider>
        </div>

        <v-list class="bg-transparent">
          <v-list-item
            v-for="item in mob.forecast"
            :key="item.day"
            :title="item.day"
            :append-icon="item.icon"
            :subtitle="item.temp"
          >
          </v-list-item>
        </v-list>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn @click="mob.expand = !mob.expand">
        {{ !mob.expand ? 'Full Report' : 'Hide Report' }}
      </v-btn>
    </v-card-actions>
  </v-card> -->
</template>
