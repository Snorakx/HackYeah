<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

const props = defineProps(['href', 'to'])

const component = computed(() => {
  if (props.href) {
    return 'a'
  }

  if (props.to) {
    return 'RouterLink'
  }

  return 'button'
})
</script>

<template>
  <component :is="component" />
</template>

<style scoped lang="scss"></style>
