<template>
  <v-main class="app-page">
    <v-container>
      <app-cards />
    </v-container>

    <app-action-button />
  </v-main>
</template>

<script setup lang="ts">
import { AppCards, AppActionButton } from '@/domains/app'
</script>

<style lang="scss" src="./AppPage.scss"></style>
