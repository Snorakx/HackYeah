<script setup lang="ts">
import { useRoutesStore } from '../stores/routes'

const store = useRoutesStore()
</script>

<template>
  <main class="route-details-view">{{ store.selectedRoute }}</main>
</template>

<style scoped lang="scss">
.route-details-view {
}
</style>
