<script setup lang="ts">
import CloseSVG from '../svg/CloseSVG.vue'
import UIButton from '../ui/UIButton.vue'
import DifficultType from './DifficultType.vue'

const emit = defineEmits(['close'])

function handleClose(): void {
  emit('close')
}
</script>

<template>
  <div class="settings-panel">
    <div class="settings">
      <div class="setting-wrapper">
        <CloseSVG @click="handleClose" class="close-icon" />
        <div class="setting-section">
          <p class="title">Dostosuj trasę</p>
          <p class="description">
            Wybierz rodzaj trasy, który najlepiej pasuje do Twoich planów i możliwości.
          </p>
          <DifficultType />
          <UIButton type="blue" class="save-button" @click="handleClose">Zapisz</UIButton>
        </div>
      </div>
    </div>
    <div class="background" @click="handleClose" />
  </div>
</template>

<style scoped lang="scss">
.settings-panel {
  position: absolute;
}

.background {
  position: fixed;
  z-index: 3;
  backdrop-filter: blur(3px);
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
}

.settings {
  position: fixed;
  max-height: calc(100vh - 250px);
  height: 100%;
  background-color: #f5f6f8;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 4;
  padding: 24px;
  overflow-y: auto;
}

.setting-wrapper {
  position: relative;
}

.close-icon {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
}

.setting-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.title {
  font: 600 16px/24px 'Roboto', 'sans-serif', 'arial';
}

.description {
  font: 400 14px/18px 'Roboto', 'sans-serif', 'arial';
}

.save-button {
  width: 100%;
}
</style>
