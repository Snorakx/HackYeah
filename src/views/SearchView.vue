<script setup lang="ts">
import NavigateBar from '@/components/search/NavigateBar.vue'
import ResultsTiles from '@/components/search/ResultsTiles.vue'
import SearchBar from '@/components/search/SearchBar.vue'
</script>

<template>
  <main>
    <div class="search">
      <NavigateBar />
      <SearchBar />
      <ResultsTiles />
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
