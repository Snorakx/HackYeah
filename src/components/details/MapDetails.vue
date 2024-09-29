<script setup lang="ts">
import UIButton from '../ui/UIButton.vue'
import MapButtons from './MapButtons.vue'
</script>

<template>
  <div class="map-details">
    <MapButtons />
    <img src="https://yeahbike.jurczak.dev/img/55.webp" />
    <UIButton type="grey" to="/map">Wyświetl podgląd szlaku</UIButton>
    <UIButton type="grey" to="/map">Wyświetl podgląd szlaku</UIButton>
  </div>
</template>

<style scoped lang="scss">
.map-details {
  padding: 0 24px 24px;
  gap: 16px;
  display: flex;
  flex-direction: column;
}
</style>
