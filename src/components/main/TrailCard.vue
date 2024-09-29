<template>
  <div class="trail-card" @click="handleClick">
    <img :src="imageUrl" :alt="trailName" class="trail-image" />
    <div class="heart-icon">❤️</div>
    <div class="map-overlay">
      <img :src="mapImageUrl" alt="Trail Map" class="map-image" />
    </div>
    <div class="trail-info">
      <h2 class="trail-name">{{ trailName }}</h2>
      <p class="trail-location">{{ location }}</p>
      <div class="trail-details">
        <div class="detail" v-for="(detail, index) in trailDetails" :key="index">
          <span class="detail-label">{{ detail.label }}</span>
          <span class="detail-value">{{ detail.value }}</span>
        </div>
      </div>
      <div class="trail-rating">
        <svg
          v-for="star in stars"
          class="star"
          :key="star"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#FFD700"
          width="15px"
          height="15px"
        >
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { useRoutesStore } from '@/stores/routes'
import { defineProps } from 'vue'

interface TrailDetail {
  label: string
  value: string
}

interface Props {
  id: number
  imageUrl: string
  mapImageUrl: string
  trailName: string
  location: string
  trailDetails: TrailDetail[]
  stars: number
}

const props = defineProps<Props>()
const store = useRoutesStore()

function handleClick() {
  store.selectRoute(props.id)
  router.push('/route-details')
}
</script>

<style scoped>
.trail-card {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-top: 16px;
}

.trail-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.heart-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
}

.map-overlay {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 80px;
  height: 80px;
  border-radius: 5px;
  overflow: hidden;
}

.map-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.trail-info {
  padding: 15px;
}

.trail-name {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.trail-location {
  color: #666;
  margin: 5px 0;
}

.trail-details {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  max-width: 70%;
}

.detail {
  display: flex;
  flex-direction: column;
}

.detail-label {
  font-size: 12px;
  color: #666;
}

.detail-value {
  font-weight: bold;
}

.trail-rating {
  margin-top: 10px;
  display: flex;
}

.star {
  color: #ffd700;
  font-size: 20px;
}
</style>
