<script setup lang="ts"></script>

<template>
  <v-menu
    transition="slide-y-transition"
    width="250"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        icon="mdi-dots-vertical"
        variant="text"
        size="large"
        class="mt-2 mr-2"
      ></v-btn>
    </template>
    <v-card>
      <v-card-text class="pa-0">
        <v-list>
          <v-list-item>
            <v-list-item-title>
              Record meter reading
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              Collect payment
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn
          block
          size="large"
          color="error"
          variant="elevated"
          class="text-body-1"
        >
          Vacate tenant
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>
