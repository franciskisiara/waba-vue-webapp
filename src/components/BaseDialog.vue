<script setup lang="ts">
const props = defineProps({
  dialog: {
    type: Boolean,
    default: false,
  },

  title: {
    required: true,
    type: String,
  },

  buttonText: {
    required: true,
    type: String,
  },

  loading: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits([
  'close',
  'execute'
])

</script>

<template>
  <v-dialog
    transition="dialog-top-transition"
    :model-value="dialog"
    width="400"
    persistent
  >
    <v-card rounded="lg">
      <v-card-item>
        <div class="d-flex justify-space-between">
          <v-card-title class="text-subtitle-1">
            {{ props.title }}
          </v-card-title>

          <v-btn
            variant="tonal"
            color="error"
            icon="mdi-close"
            size="x-small"
            @click="emit('close')"
          ></v-btn>
        </div>
      </v-card-item>

      <v-divider class="my-3"></v-divider>

      <v-card-text>
        <slot name="content"></slot>
      </v-card-text>

      <v-card-actions class="px-6 pb-7">
        <v-btn
          block
          size="large"
          rounded="lg"
          color="primary"
          variant="elevated"
          :loading="loading"
          :disabled="loading"
          class="text-caption font-weight-bold"
          @click="emit('execute')"
        >
          {{ props.buttonText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
