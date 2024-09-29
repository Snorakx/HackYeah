<script setup lang="ts">
import UIButton from '@/components/ui/UIButton.vue'
import ChevronLeftSVG from '@/components/svg/ChevronLeftSVG.vue'
import SettingsSVG from '../svg/SettingsSVG.vue'
</script>

<template>
  <div class="actions">
    <UIButton to="/home">
      <ChevronLeftSVG />
    </UIButton>

    <span class="search-title">Gdzie jedziesz?</span>

    <UIButton to="/home">
      <SettingsSVG />
    </UIButton>
  </div>
</template>

<style scoped lang="scss">
.actions {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 32px 16px;
  align-items: center;
}

.search-title {
  font-weight: 600;
}
</style>
