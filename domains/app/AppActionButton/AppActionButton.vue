<template>
  <v-speed-dial location="top center" transition="fade-transition">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        class="app-action-button"
        icon
        size="x-large"
      >
        <v-icon icon="mdi-plus" />
      </v-btn>
    </template>

    <v-btn
      v-for="(group, groupIdx) in groups"
      :key="groupIdx"
      :icon="group.icon"
      size="large"
    />
  </v-speed-dial>
</template>

<script setup lang="ts">
import { getGroups } from '@/services/groups'
import type { GroupData } from '@/types/types'

async function fetchData() {
  try {
    const data = await getGroups()
    return data as unknown as GroupData[]
  } catch (err) {
    console.error(err)
    return []
  }
}

const { data: groups, error } = useLazyAsyncData('groups', fetchData, {
  default: () => [],
  server: false,
})

if (error.value) {
  console.error(error.value)
}
</script>

<style lang="scss" src="./AppActionButton.scss"></style>
