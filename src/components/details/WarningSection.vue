<script setup lang="ts">
const props = defineProps(['warnings'])
</script>

<template>
  <div class="warnings-section">
    <ol>
      <li v-for="warning in props.warnings" :key="warning">{{ warning }}</li>
    </ol>
  </div>
</template>

<style scoped lang="scss">
.warnings-section {
  padding: 0 24px;
}

ol {
  list-style-type: disc;
  list-style-position: inside;
  font-family: 'Roboto';
}
</style>
