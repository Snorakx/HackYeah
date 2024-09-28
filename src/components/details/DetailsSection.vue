<script setup lang="ts">
const props = defineProps(['details'])
</script>

<template>
  <div class="details-section">
    <p>{{ props.details }}</p>
  </div>
</template>

<style scoped lang="scss">
.details-section {
  padding: 24px;
}
</style>
