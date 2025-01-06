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

    <v-btn key="1" icon="$success" size="large"></v-btn>
    <v-btn key="2" icon="$info" size="large"></v-btn>
    <v-btn key="3" icon="$warning" size="large"></v-btn>
    <v-btn key="4" icon="$error" size="large"></v-btn>
  </v-speed-dial>
</template>

<style lang="scss" src="./AppActionButton.scss"></style>
