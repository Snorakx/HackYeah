<script setup lang="ts">
import { ref } from 'vue'
import CirclesSVG from '../svg/CirclesSVG.vue'
import SearchSVG from '../svg/SearchSVG.vue'

const emit = defineEmits(['isEmpty'])
const start = ref('')
const destination = ref('')

function isEmpty() {
  if (!start.value || !destination.value) {
    emit('isEmpty', true)
    return
  }

  emit('isEmpty', false)
}
</script>

<template>
  <div class="search-bar">
    <div class="input-wrapper">
      <div class="input">
        <CirclesSVG class="input-icon" />
        <input type="text" placeholder="Start podróży" v-model="start" @input="isEmpty" />
      </div>
      <div class="input">
        <SearchSVG class="input-icon" />
        <input type="text" placeholder="Cel podróży" v-model="destination" @input="isEmpty" />
      </div>
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
  padding: 12px 14px 12px 46px;
  background-color: #f5f6f8;
  width: 100%;
}

input:focus {
  outline: 2px solid #0054fe;
}

.input {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 10px;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
}
</style>
