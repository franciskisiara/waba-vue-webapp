<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'

import { axios } from '@/libs/services'
import { store } from '@/libs/vault'

const google = (window as any).google
const googleButton = ref(null)

const form = reactive({
  loading: false,
})

function triggerGoogleSignIn () {
  (googleButton.value as any).querySelector('div[role=button]').click()
}

function login (res: any) {
  axios.post('login', res)
    .then(({ data }) => {
      store(data.data)
      location.href = "/apartments"
    })
    .catch(() => {})
    .finally(() => {
      form.loading = false
    })
}

onMounted(() => {
  google.accounts.id.initialize({
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    callback: login
  })
  google.accounts.id.renderButton(googleButton.value, {})
})
</script>

<template>
  <div class="d-flex h-100 align-center justify-center pa-5">
    <div
      class="text-center flex-1-1-100"
      flat
    >
      <h1 class="waba--logo-text">
        Waba
      </h1>

      <v-btn
        block
        rounded="lg"
        size="x-large"
        variant="elevated"
        class="text-body-1"
        :dark="!form.loading"
        :loading="form.loading"
        :disabled="form.loading"
        @click="triggerGoogleSignIn"
      >
        <img
          src="google.png"
          max-width="20"
          class="mr-2"
          style="width: 20px; height: 20px"
        />
        Sign in with Google
      </v-btn>
    </div>
  </div>

  <div ref="googleButton" class="d-none"></div>
</template>

