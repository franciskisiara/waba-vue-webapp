<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import { useRoute } from 'vue-router';
import TheProfileMenu from '@/components/TheProfileMenu.vue';

const { mobile } = useDisplay()
const route = useRoute()
const title = ref(route.meta.title)

const navigationLinks: any = [
  { text: 'Apartments', to: 'apartments', icon: 'home-group' },
  // { text: 'Payments', to: 'payments', icon: 'cash-sync', },
  // { text: 'Settings', to: 'settings', icon: 'cogs', },
]

document.title = `${title.value || 'Waba'} :: Rascan Waba`
</script>

<template>
  <v-app-bar
    flat
    border
    color="#fff"
  >
    <v-app-bar-title class="waba--logo-text py-0">
      waba
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <TheProfileMenu />
  </v-app-bar>

  <v-main class="app--main-content">
    <router-view></router-view>
  </v-main>

  <v-bottom-navigation
    v-if="mobile"
  >
    <v-btn
      v-for="(link, index) in navigationLinks"
      :key="`bottom-nav-${index}`"
      :to="`/${link.to}`"
    >
      <v-icon>mdi-{{ link.icon }}</v-icon>
      <span>{{ link.text }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>
