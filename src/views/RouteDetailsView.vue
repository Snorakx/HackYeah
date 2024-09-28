<script setup lang="ts">
import { useRoutesStore } from '../stores/routes'
import ImageSlider from '@/components/details/ImageSlider.vue'
import ActionButtons from '@/components/details/ActionButtons.vue'

const store = useRoutesStore();
</script>

<template>
  <main class="route-details-view">
    <div class="top-section">
      <ActionButtons />
      <ImageSlider :images="store.selectedRoute.images" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.route-details-view {
  padding: 0;
  position: relative;
}
</style>
