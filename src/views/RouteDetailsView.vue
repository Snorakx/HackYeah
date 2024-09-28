<script setup lang="ts">
import UIButton from '@/components/ui/UIButton.vue'
import { useRoutesStore } from '../stores/routes'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import ChevronLeftSVG from '@/components/svg/ChevronLeftSVG.vue'
import ShareSVG from '@/components/svg/ShareSVG.vue'
import FavouriteSVG from '@/components/svg/FavouriteSVG.vue'

const store = useRoutesStore()
</script>

<template>
  <main class="route-details-view">
    <div class="top-section">
      <div class="actions">
        <UIButton to="/about">
          <ChevronLeftSVG />
        </UIButton>

        <div class="right">
          <UIButton to="/about">
            <ShareSVG />
          </UIButton>

          <UIButton to="/about">
            <FavouriteSVG />
          </UIButton>
        </div>
      </div>

      <Carousel>
        <Slide v-for="slide in store.selectedRoute.images" :key="slide">
          <div class="carousel__item">
            <img :src="`https://yeahbike.jurczak.dev/img/${slide}.jpg`" class="slide-image" />
          </div>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </main>
</template>

<style scoped lang="scss">
.route-details-view {
  padding: 0;
  position: relative;
}

.carousel__pagination {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
}

:deep(.carousel__pagination-button::after) {
  background-color: #ececeb;
  opacity: 40%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  transition:
    width 0.2s ease-in-out,
    border-radius 0.2s ease-in-out;
}

:deep(.carousel__pagination-button--active::after) {
  background-color: #ececeb;
  opacity: 100%;
  width: 28px;
  height: 9px;
  border-radius: 8px;
}

.slide-image {
  min-height: 430px;
  object-fit: cover;
}

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
