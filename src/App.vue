<script setup lang="ts">
import BottomNavigation from './components/BottomNavigation.vue'
</script>

<template>
  <div class="container-main">
    <div class="container-view">
      <RouterView />
      <BottomNavigation />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-main {
  width: 100vw;
  display: flex;
  justify-content: center;
}

.container-view {
  max-width: 700px;
  width: 100%;
  height: 100vh;
}
</style>
