<script setup lang="ts">
import { useHttp } from '@/composables/http'
import { useCommon } from '@/composables/common'
import BaseDialog from '@/components/BaseDialog.vue'

const { dialog } = useCommon()
const { loading, inputs, errors, request } = useHttp('post', 'apartments', {
  name: null,
  unit_charge: null,
  fixed_charge: null,
  fixed_charge_threshold: null,
})

const addApartment = () => {
  request().then(() => {
    dialog.close()
  })
}
</script>

<template>
  <BaseDialog
    :loading="loading"
    :dialog="dialog.state.value"
    title="Add an apartment"
    button-text="SAVE APARTMENT DETAILS"
    @close="dialog.close()"
    @execute="addApartment()"
  >
    <template #content>
      <v-text-field
        class="mb-2"
        persistent-hint
        rounded="lg"
        density="compact"
        variant="outlined"
        label="Apartment name"
        v-model="inputs.name"
        :hint="errors.get('name')"
        :error="errors.has('name')"
        @input.stop="errors.clear('name')"
      ></v-text-field>

      <v-text-field
        class="mb-2"
        persistent-hint
        type="number"
        step=".01"
        min="0"
        rounded="lg"
        density="compact"
        variant="outlined"
        label="Unit charge"
        v-model="inputs.unit_charge"
        :hint="errors.get('unit_charge')"
        :error="errors.has('unit_charge')"
        @input.stop="errors.clear('unit_charge')"
      ></v-text-field>

      <v-text-field
        class="mb-2"
        type="number"
        step=".01"
        min="0"
        persistent-hint
        rounded="lg"
        density="compact"
        variant="outlined"
        label="Fixed charge"
        v-model="inputs.fixed_charge"
        :hint="errors.get('fixed_charge')"
        :error="errors.has('fixed_charge')"
        @input.stop="errors.clear('fixed_charge')"
      ></v-text-field>

      <v-text-field
        type="number"
        step=".01"
        min="0"
        persistent-hint
        rounded="lg"
        density="compact"
        variant="outlined"
        label="Fixed charge threshold"
        v-model="inputs.fixed_charge_threshold"
        :hint="errors.get('fixed_charge_threshold')"
        :error="errors.has('fixed_charge_threshold')"
        @input.stop="errors.clear('fixed_charge_threshold')"
      ></v-text-field>
    </template>
  </BaseDialog>
</template>
