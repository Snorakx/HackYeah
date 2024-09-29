<script setup lang="ts">
import PlaceSVG from '../svg/PlaceSVG.vue'
</script>

<template>
  <div class="results-tiles">
    <div class="tile" v-for="i in 20" :key="i">
      <PlaceSVG />
      <div>
        <p class="town">Kraków</p>
        <p class="street">Ulica Porzeczkowa 3, Kraków</p>
      </div>
    </div>
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
