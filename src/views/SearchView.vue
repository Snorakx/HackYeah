<script setup lang="ts">
import BottomNavigation from '@/components/BottomNavigation.vue'
import NavigateBar from '@/components/search/NavigateBar.vue'
import ResultsTiles from '@/components/search/ResultsTiles.vue'
import SearchBar from '@/components/search/SearchBar.vue'
import { ref } from 'vue'

const empty = ref(true)

function handleIsEmpty(isEmpty: boolean): void {
  empty.value = isEmpty
}
</script>

<template>
  <main>
    <div class="search">
      <NavigateBar />
      <SearchBar @is-empty="handleIsEmpty" />
      <ResultsTiles v-if="!empty" />
    </div>
    <BottomNavigation />
  </main>
</template>

<style scoped lang="scss"></style>
