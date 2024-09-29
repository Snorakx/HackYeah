<script setup lang="ts">
import { usePlacesStore } from '@/stores/places'
import PlaceSVG from '../svg/PlaceSVG.vue'
import { RouterLink } from 'vue-router'

const store = usePlacesStore()
</script>

<template>
  <div class="results-tiles">
    <RouterLink class="tile" v-for="place in store.allPlaces" :key="place.city" to="/map">
      <PlaceSVG />
      <div>
        <p class="town">{{ place.city }}</p>
        <p class="street">{{ place.street }}</p>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.results-tiles {
  padding: 16px;
}

.tile {
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  gap: 16px;
}

.town {
  font: 500 16px/24px 'Roboto';
}

.street {
  font: 500 14px/22px 'Roboto';
  color: #5c5c5c;
}
</style>
