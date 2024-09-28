<script setup lang="ts">
import searchBar from '../components/mainView/SearchBar.vue';
</script>

<template>
  <main>
    <div class="container">
        <searchBar/>
    </div>
  </main>
</template>

<style scoped lang="scss">

.container {
 display: flex;
 align-items: center;
 justify-content: center;
}

</style>