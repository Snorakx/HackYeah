<script setup lang="ts">
import { ref } from 'vue'
import SearchSVG from '../svg/SearchSVG.vue'
import UIButton from '../ui/UIButton.vue'
import ChevronLeftSVG from '../svg/ChevronLeftSVG.vue'

const value = ref('')
</script>

<template>
  <div class="search-bar">
    <UIButton to="/home">
      <ChevronLeftSVG />
    </UIButton>

    <div class="input-wrapper">
      <div class="input">
        <SearchSVG class="input-icon" />
        <input type="text" placeholder="Cel podróży" v-model="value" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-bar {
  padding: 16px;
  display: flex;
  gap: 16px;
  align-items: center;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

input {
  border-radius: 12px;
  padding: 12px 14px 12px 46px;
  background-color: #f5f6f8;
  width: 100%;
  outline: 2px solid #222222;
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
