<template>
  <div class="container">
    <div class="holder">
      <div class="location">
        <span class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="location-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 2C8.134 2 5 5.134 5 9c0 4.418 7 13 7 13s7-8.582 7-13c0-3.866-3.134-7-7-7zm0 10a3 3 0 110-6 3 3 0 010 6z"
            />
          </svg>
        </span>
        <span>Kraków, małopolskie</span>
      </div>

      <h1>Cześć, Kasia! Powiedz nam gdzie chciałabyś pojechać?</h1>

      <RouterLink class="search-bar" to="/search">
        <svg
          class="icon search-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 4a7 7 0 100 14 7 7 0 000-14zm10 10l-4.35-4.35"
          />
        </svg>
        <input type="text" placeholder="Wyszukaj trasę" />
        <svg
          class="icon filter-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 4h18M3 12h12m-6 8h12"
          />
        </svg>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

// Brak logiki, ale możesz dodać propsy lub emitery, jeśli to potrzebne.
</script>

<style scoped>
.container {
  background-image: url('https://yeahbike.jurczak.dev/img/7.jpg');
  border-radius: 0 0 50px 50px;
  max-width: 100%;
  background-size: cover;
  background-position: center;
}

.holder {
  padding: 40px 20px;
  color: #000;
  text-align: center;
  border-radius: 0 0 50px 50px;
  backdrop-filter: brightness(85%) blur(2px);
  width: 100%;
}

.location {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #ffffff;
}

.location .icon {
  margin-right: 5px;
}

h1 {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 20px;
  color: #ffffff;
  margin-left: 15px;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2); /* Transparentne białe tło */
  border-radius: 50px;
  padding: 10px 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  width: 100%;
}

input {
  border: none;
  outline: none;
  flex-grow: 1;
  background-color: transparent;
  color: #ffffff; /* Kolor tekstu */
  font-size: 16px;
  margin-left: 10px;
}

.icon {
  width: 24px;
  height: 24px;
  color: #ffffff; /* Kolor ikon */
}

.search-icon {
  margin-right: 10px;
}

.filter-icon {
  margin-left: 10px;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.7); /* Kolor placeholdera */
}
</style>
