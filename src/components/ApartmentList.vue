<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useHttp } from '@/composables/http'

const apartments: any = ref([])
const http = useHttp()

const metadata = [
  { icon: 'water', text: 'Unit charge', value: 'unit_charge', color: '#3498db', },
  { icon: 'water-outline', text: 'Fixed charge', value: 'fixed_charge', color: '#2ecc71', },
  { icon: 'water-sync', text: ' Fixed charge units', value: 'fixed_charge_threshold', color: '#e74c3c', },
]

onMounted(async () => {
  http.request({
    method: 'get',
    url: 'apartments',
  })
    .then((response) => {
      apartments.value = response
    })
})
</script>

<template>
  <div
    v-if="apartments.data?.length === 0"
    class="d-flex h-100 flex-column justify-center align-center px-3"
  >
    <div class="text-center">
      <v-img
        src="no-connection.png"
        height="60"
        width="60"
        class="mx-auto mb-3"
      ></v-img>
      <p class="text-h5 font-weight-bold">
        No Apartments Found
      </p>
      <p>In order to get started with Waba, add an apartment using the button above</p>
    </div>
  </div>

  <div
    v-else
    class="mx-3"
  >
    <v-card
      v-for="(apartment, index) in (apartments.data as any)"
      :key="`apartment-${index}`"
      rounded="lg"
      elevation="2"
      class="mb-5"
    >
      <v-card
        flat
        :to="`/apartments/${apartment.apartment_uid}/houses`"
      >
        <v-card-item
          class="font-weight-medium"
        >
          <v-card-title class="text-body-2">
            {{ apartment.name }}
          </v-card-title>
        </v-card-item>

        <v-divider></v-divider>

        <v-card-text>
          <div
            v-for="(item, index) in metadata"
            :key="`metadata-${index}`"
            class="d-flex justify-space-between text-body-2"
          >
            <span>
              <v-icon

                class="mt-n1 mr-1"
                :color="item.color"
              >
                mdi-{{ item.icon }}
              </v-icon>
              {{ item.text }}
            </span>

            {{ apartment[item.value] || '-' }}
          </div>
        </v-card-text>
      </v-card>
    </v-card>
  </div>
</template>
