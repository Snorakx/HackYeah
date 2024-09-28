<template>
  <TrailCard
    v-for="(route, index) in allRoutes"
    :key="route.id"
    :imageUrl="getRouteImageUrl(route.images)"
    mapImageUrl="https://yeahbike.jurczak.dev/img/55.webp"
    :trailName="route.name"
    :location="route.place"
    :trailDetails="[
      { label: 'Długość', value: route.duration },
      { label: 'Dystans', value: route.distance },
      { label: 'Typ', value: route.routeType }
    ]"
    :stars="route.opinionsAverage"
    :id="index"
  />
</template>

<script setup lang="ts">
import TrailCard from './TrailCard.vue'
import { useRoutesStore } from '../../stores/routes'

const store = useRoutesStore()
const allRoutes = store.allRoutes

function getRouteImageUrl(routeImages: string[]): string {
  return `https://yeahbike.jurczak.dev/img/${routeImages[0]}.jpg`
}
</script>
<style scoped></style>
