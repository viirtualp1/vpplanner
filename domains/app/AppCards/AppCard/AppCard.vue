<template>
  <v-card
    :append-icon="appendIcon ?? 'mdi-open-in-new'"
    :title="title"
    :subtitle="description"
    :href="link"
  />
</template>

<script setup lang="ts">
import type { AppCardType } from '../types'

defineProps<AppCardType>()
</script>
