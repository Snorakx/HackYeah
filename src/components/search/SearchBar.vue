<script setup lang="ts">
import { ref } from 'vue'

const start = ref('')
const destination = ref('')
</script>

<template>
  <div class="search-bar">
    <div class="input-wrapper">
      <input type="text" placeholder="Start podróży" v-model="start" />
      <input type="text" placeholder="Cel podróży" v-model="destination" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-bar {
  padding: 16px;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

input {
  border-radius: 12px;
  padding: 12px 14px;
  background-color: #f5f6f8;
}

input:focus {
  outline: 2px solid #0054fe;
}
</style>
