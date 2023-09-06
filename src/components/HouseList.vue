<script setup lang="ts">
import { axios } from '@/libs/services';
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import HouseCard from '@/components/HouseCard.vue';

// type House = {
//   'house_uid': string,
//   // "apartment_uid": "c48631d9-7a0c-43fa-9214-3e294a643bc1",
//   // "house_number": "C4",
//   // "tenant_uid": "26a0e151-19f2-4d3b-94f3-4cf5b29aa4eb",
//   // "tenant": {
//   //     "user_uid": "26a0e151-19f2-4d3b-94f3-4cf5b29aa4eb",
//   //     "name": "Frank",
//   //     "email": null,
//   //     "phone": "254711887341"
//   // }
// }
const route = useRoute()
const data = ref([])
axios.get('houses', {
  params: {
    apartmentUid: route.params.apartmentUid
  }
})
  .then((res: any) => {
    data.value = res.data.data
  })
  .catch(() => {

  })

//   const mob = reactive({
//     expand: true,
//     labels: { 0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA' },
//     time: 0,
//     forecast: [
//       { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
//       { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
//       { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
//     ],
//   })

  // export default {
  //   data: () => ({

  //
  //   expand: false,
  //

  // })
</script>

<template>
  <HouseCard
    v-for="(house, i) in (data as any)"
    :key="`house-card-${i}`"
    :house="house"
  />
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
