<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

const props = defineProps(['href', 'to', 'type'])

const component = computed(() => {
  if (props.href) {
    return 'a'
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
  <div :class="type">
    <RouterLink :to="to" v-if="props.to">
      <slot></slot>
    </RouterLink>
    <component :is="component" v-else>
      <slot></slot>
    </component>
  </div>
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

.green-button {
  padding: 8px;
  border-radius: 40px;
  min-height: 52px;
  background-color: #64f57b;
  display: flex;
  gap: 8px;
  justify-content: center;
  font-weight: 600;
}

.grey-button {
  padding: 8px;
  border-radius: 40px;
  min-height: 52px;
  background-color: #efefec;
  display: flex;
  gap: 8px;
  justify-content: center;
  font-weight: 600;
}
</style>
