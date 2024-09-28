<script setup lang="ts">
import UIButton from '@/components/ui/UIButton.vue'
import ChevronLeftSVG from '@/components/svg/ChevronLeftSVG.vue'
import ShareSVG from '@/components/svg/ShareSVG.vue'
import FavouriteSVG from '@/components/svg/FavouriteSVG.vue'

const props = defineProps(['routeId'])
</script>

<template>
  <div class="actions">
    <UIButton to="/home">
      <ChevronLeftSVG />
    </UIButton>

    <div class="right">
      <UIButton to="/home">
        <ShareSVG />
      </UIButton>

      <UIButton to="/home">
        <FavouriteSVG />
      </UIButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.actions {
  position: absolute;
  top: 32px;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;

  & .right {
    display: flex;
    gap: 8px;
  }
}
</style>
