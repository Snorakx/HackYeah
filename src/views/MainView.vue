<script setup lang="ts">
import searchBar from '../components/mainView/SearchBar.vue';
import CardBox from '../components/mainView/CardBox.vue';
</script>

<template>
  <main>
    <div class="container">
        <searchBar/>
        <div class="holder">
            <CardBox/>
        </div>
    </div>
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
    width:100%;
    margin-top: 16px;
    padding: 0 16px;
}
</style>