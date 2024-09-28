<script setup lang="ts">
import { useRoutesStore } from '../stores/routes'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const store = useRoutesStore()
</script>

<template>
  <main class="route-details-view">
    <Carousel>
      <Slide v-for="slide in store.selectedRoute.images" :key="slide">
        <div class="carousel__item"></div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </main>
</template>

<style scoped lang="scss">
.route-details-view {
}
</style>
