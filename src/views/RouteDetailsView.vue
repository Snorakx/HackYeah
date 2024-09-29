<script setup lang="ts">
import { useRoutesStore } from '../stores/routes'
import ImageSlider from '@/components/details/ImageSlider.vue'
import ActionButtons from '@/components/details/ActionButtons.vue'
import RouteDetails from '@/components/details/RouteDetails.vue'
import WarningSection from '@/components/details/WarningSection.vue'
import DetailsSection from '@/components/details/DetailsSection.vue'
import MapDetails from '@/components/details/MapDetails.vue'
import { onMounted } from 'vue'

const store = useRoutesStore()

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <main class="route-details-view" v-if="store.selectedRoute">
    <div class="top-section">
      <ActionButtons />
      <ImageSlider :images="store.selectedRoute.images" />
      <RouteDetails :selected-route="store.selectedRoute" />
      <WarningSection :warnings="store.selectedRoute.warnings" />
      <DetailsSection :details="store.selectedRoute.description" />
      <MapDetails />
    </div>
  </main>
</template>

<style scoped lang="scss">
.route-details-view {
  padding: 0;
  position: relative;
}
</style>
