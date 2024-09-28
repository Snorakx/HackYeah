<template>
    <div class="trail-card">
      <img :src="imageUrl" :alt="trailName" class="trail-image">
      <div class="heart-icon">❤️</div>
      <div class="map-overlay">
        <img :src="mapImageUrl" alt="Trail Map" class="map-image">
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
          <span v-for="star in 5" :key="star" class="star">X</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TrailCard',
    props: {
      imageUrl: String,
      mapImageUrl: String,
      trailName: String,
      location: String,
      trailDetails: Array
    }
  }
  </script>
  
  <style scoped>
  .trail-card {
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
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
  }
  
  .detail {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  }
  
  .star {
    color: #ffd700;
    font-size: 20px;
  }
  </style>