<template>
  <v-row class="app-cards">
    <v-col
      v-for="(card, cardIdx) in cards"
      :key="cardIdx"
      cols="12"
      :sm="Math.floor(12 / cards.length)"
    >
      <app-card
        :title="card.title"
        :description="card.description"
        :link="card.link"
        :append-icon="card.appendIcon"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { AppCard } from './AppCard'
import type { AppCardType } from './types'

const cards: AppCardType[] = [
  {
    title: 'Daily plans',
    description: 'Plan your day with our daily planner',
    link: '/daily-plans',
  },
  {
    title: 'Plans',
    description: 'Plan your life',
    link: '/plans',
  },
  {
    title: 'Manage',
    description: 'Manage your groups',
    link: '/manage',
    appendIcon: 'mdi-cog',
  },
]
</script>
