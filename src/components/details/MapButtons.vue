<script setup lang="ts">
import UIButton from '@/components/ui/UIButton.vue'
</script>

<template>
  <div class="map-buttons">
    <div class="wrapper">
      <UIButton type="green" class="button"> Pobierz </UIButton>
      <UIButton type="grey" class="button" to="/map"> Mapa </UIButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.map-buttons .wrapper {
  display: flex;
  gap: 16px;
  width: 100%;
}

.button {
  flex: 1;
}
</style>
