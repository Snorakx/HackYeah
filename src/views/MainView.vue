<script setup lang="ts">
import BottomNavigation from '@/components/BottomNavigation.vue'
import CardBox from '@/components/main/CardBox.vue'
import SearchBar from '@/components/main/SearchBar.vue'
</script>

<template>
  <main>
    <div class="container">
      <SearchBar />
      <div class="holder">
        <CardBox />
      </div>
    </div>
    <BottomNavigation />
  </main>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.holder {
  width: 100%;
  margin-top: 16px;
  padding: 0 16px;
}
</style>
