<script setup lang="ts">
import LocationSVG from './svg/LocationSVG.vue'
import ProfileSVG from './svg/ProfileSVG.vue'
import SmallFavouriteSVG from './svg/SmallFavouriteSVG.vue'
import SmallSearchSVG from './svg/SmallSearchSVG.vue'
</script>

<template>
  <div class="bottom-navigation">
    <div class="element">
      <SmallSearchSVG />
      <p class="blue">Odkrywaj</p>
    </div>
    <div class="element">
      <LocationSVG />
      <p>Nawiguj</p>
    </div>
    <div class="element">
      <SmallFavouriteSVG />
      <p>Ulubione</p>
    </div>
    <div class="element">
      <ProfileSVG />
      <p>Profil</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bottom-navigation {
  position: fixed;
  bottom: 16px;
  max-width: calc(100vw - 32px);
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  background-color: rgba(white, 0.85);
  box-shadow: 0 4px 4px 0 rgba(black, 0.25);
  border-radius: 80px;
  padding: 10px 24px;
}

.element {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  align-items: center;
  letter-spacing: 0.4px;
  font-weight: 500;
}

.blue {
  color: #0054fe;
}
</style>
