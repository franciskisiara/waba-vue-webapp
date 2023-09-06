<script setup lang="ts">
import { useCommon } from '@/composables/common'

const props = defineProps({
  title: {
    required: true,
    type: String,
  },

  actionText: {
    type: String,
  }
})

const { dialog } = useCommon()
</script>

<template>
  <v-card
    flat
    rounded="0"
    class="d-flex flex-column"
    style="height: calc(100vh - 120px)"
  >
    <div class="d-flex justify-space-between align-center py-2 pr-3">
      <v-card-title class="text-h6">
        {{ props.title }}
      </v-card-title>

      <div>
        <slot name="actions">
          <v-btn
            rounded="lg"
            color="primary"
            class="text-body-2 font-weight-normal"
            @click="dialog.open()"
          >
            {{ props.actionText }}
          </v-btn>
        </slot>
      </div>
    </div>

    <div class="flex-grow-1">
      <slot name="content"></slot>
    </div>
  </v-card>
</template>
