<template>
    <TrailCard
      :imageUrl="'https://example.com/trail-image.jpg'"
      :mapImageUrl="'https://example.com/trail-map.jpg'"
      :trailName="'Szlak Orlich Gniazd'"
      :location="'Ojcowski Park Narodowy, małopolskie'"
      :trailDetails="[
        { label: 'Długość', value: '2h 57 min' },
        { label: 'Długość', value: '2h 57 min' },
        { label: 'Długość', value: '2h 57 min' }
      ]"
    />
  </template>
  
  <script>
  import TrailCard from './TrailCard.vue'
  
  export default {
    components: {
      TrailCard
    }
  }
  </script>