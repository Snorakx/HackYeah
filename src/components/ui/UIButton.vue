<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

const props = defineProps(['href', 'to', 'type'])

const component = computed(() => {
  if (props.href) {
    return 'a'
  }

  if (props.to) {
    return 'RouterLink'
  }

  return 'button'
})

const type = computed(() => {
  if (props.type) {
    return `${props.type}-button`
  }

  return 'primary-button'
})
</script>

<template>
  <component :is="component" :class="type">
    <slot></slot>
  </component>
</template>

<style scoped lang="scss">
.primary-button {
  padding: 8px;
  border-radius: 50%;
  min-height: 40px;
  min-width: 40px;
  background-color: white;
  display: flex;
}
</style>
