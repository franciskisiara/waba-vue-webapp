<script setup lang="ts">
import { retrieve } from '@/libs/vault';

const { user } = retrieve()
</script>

<template>
  <v-menu
    transition="slide-y-transition"
    width="200"
  >
    <template v-slot:activator="{ props }">
      <v-avatar
        v-bind="props"
        class="mr-3"
      >
        <v-img
          :src="user.avatar"
          alt="User avatar"
          referrerpolicy="no-referrer"
        ></v-img>
      </v-avatar>
    </template>

    <v-card flat>
      <v-card-actions>
        <v-btn
          block
          rounded="lg"
          color="error"
          variant="tonal"
          class="text-caption font-weight-bold"
        >
          LOGOUT
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>
