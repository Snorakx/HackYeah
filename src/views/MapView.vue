<script setup lang="ts">
import SearchBar from '@/components/map/SearchBar.vue'
import UIButton from '@/components/ui/UIButton.vue'
</script>

<template>
  <main class="map-view">
    <div class="top-bar">
      <SearchBar />
    </div>
    <div class="bottom">
      <img src="https://yeahbike.jurczak.dev/img/14.png" />
    </div>
    <div class="actions">
      <UIButton type="grey">Zapisz trasę</UIButton>
      <UIButton type="green">Rozpocznij</UIButton>
    </div>
  </main>
</template>

<style scoped lang="scss">
.top-bar {
  background-image: url('https://yeahbike.jurczak.dev/img/55.webp');
  min-height: 340px;
}

.bottom {
  display: flex;
  justify-content: center;
  padding: 24px 0;
}

.actions {
  padding: 16px;
  display: flex;
  gap: 24px;
  box-shadow: 0 -4px 4px 0 rgba(black, 0.04);
  & :deep(> div) {
    flex: 1;
  }
}
</style>
