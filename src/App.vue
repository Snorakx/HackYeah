<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LogoSVG from './components/svg/LogoSVG.vue'
</script>

<template>
  <header>
    <LogoSVG alt="Vue logo" />

    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss"></style>
