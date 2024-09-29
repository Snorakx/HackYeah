<template>
  <div class="trail-card" @click="handleClick">
    <img :src="imageUrl" :alt="trailName" class="trail-image" />
    <div class="heart-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g clip-path="url(#clip0_170_1350)">
<path d="M16.875 3C15.375 3 13.95 3.6 12.9 4.65L12 5.55L11.175 4.725C9.00002 2.475 5.40002 2.475 3.22502 4.65L3.15002 4.725C0.900024 6.975 0.900024 10.575 3.15002 12.825L12 21.75L20.85 12.825C23.1 10.575 23.1 6.975 20.85 4.725C19.8 3.6 18.375 3 16.875 3Z" fill="black" fill-opacity="0.32"/>
</g>
<g clip-path="url(#clip1_170_1350)">
<g filter="url(#filter0_d_170_1350)">
<path d="M16.8375 4.5C17.3835 4.49954 17.9242 4.6081 18.4277 4.81931C18.9313 5.03052 19.3876 5.34014 19.77 5.73C20.5578 6.52979 20.9994 7.60737 20.9994 8.73C20.9994 9.85264 20.5578 10.9302 19.77 11.73L12 19.5975L4.22995 11.73C3.44214 10.9302 3.00054 9.85264 3.00054 8.73C3.00054 7.60737 3.44214 6.52979 4.22995 5.73C4.61252 5.34042 5.06889 5.03096 5.57239 4.81972C6.07589 4.60848 6.61643 4.49968 7.16245 4.49968C7.70847 4.49968 8.24902 4.60848 8.75252 4.81972C9.25602 5.03096 9.71238 5.34042 10.095 5.73L12 7.68L13.8975 5.745C14.2786 5.35049 14.7355 5.0369 15.2406 4.82298C15.7458 4.60906 16.2889 4.49921 16.8375 4.5ZM16.8375 3C16.0917 2.99937 15.3533 3.14764 14.6655 3.43613C13.9778 3.72461 13.3546 4.1475 12.8325 4.68L12 5.52L11.1675 4.68C10.6447 4.14846 10.0213 3.72631 9.33369 3.43814C8.64609 3.14998 7.908 3.00157 7.16245 3.00157C6.41691 3.00157 5.67882 3.14998 4.99121 3.43814C4.30361 3.72631 3.68024 4.14846 3.15745 4.68C2.09386 5.76272 1.49792 7.21977 1.49792 8.7375C1.49792 10.2552 2.09386 11.7123 3.15745 12.795L12 21.75L20.8425 12.795C21.906 11.7123 22.502 10.2552 22.502 8.7375C22.502 7.21977 21.906 5.76272 20.8425 4.68C20.3198 4.14818 19.6965 3.72573 19.0089 3.4373C18.3213 3.14886 17.5831 3.00021 16.8375 3Z" fill="white"/>
</g>
</g>
<defs>
<filter id="filter0_d_170_1350" x="1.49792" y="3" width="29.004" height="26.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="4" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_170_1350"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_170_1350" result="shape"/>
</filter>
<clipPath id="clip0_170_1350">
<rect width="24" height="24" fill="white"/>
</clipPath>
<clipPath id="clip1_170_1350">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div>
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
