<script setup lang="ts">
import UIButton from '../ui/UIButton.vue'
import MapButtons from './MapButtons.vue'
</script>

<template>
  <div class="map-details">
    <MapButtons />
    <UIButton type="grey">Wyświetl podgląd szlaku</UIButton>
    <UIButton type="grey">Wyświetl podgląd szlaku</UIButton>
  </div>
</template>

<style scoped lang="scss">
.map-details {
  padding: 0 24px;
  gap: 16px;
  display: flex;
  flex-direction: column;
}
</style>
