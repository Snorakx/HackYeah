<script setup lang="ts"></script>

<template>
  <div class="difficult-type">
    <div class="tile">
      <img src="https://yeahbike.jurczak.dev/img/11.png" class="image" />
      <div class="text-section">
        <p class="title">Rodzinna przygoda</p>
        <p class="description">
          Bezpieczne i spokojne trasy idealne dla rodzin z dziećmi. Odkryjcie razem urokliwe
          zakątki!
        </p>
      </div>
    </div>
    <div class="tile">
      <img src="https://yeahbike.jurczak.dev/img/12.png" class="image" />
      <div class="text-section">
        <p class="title">Weekendowa wycieczka</p>
        <p class="description">
          Zbalansowana trasa dla aktywnych dorosłych. Połączenie relaksu i wyzwań na dwóch kółkach.
        </p>
      </div>
    </div>
    <div class="tile">
      <img src="https://yeahbike.jurczak.dev/img/13.png" class="image" />
      <div class="text-section">
        <p class="title">Wyzwanie dla pasjonatów</p>
        <p class="description">
          Trasa dla doświadczonych rowerzystów szukających adrenaliny. Przygotuj się na prawdziwą
          przygodę!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.difficult-type {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tile {
  display: flex;
  gap: 8px;
  padding: 16px;
  border: 1px solid #d8d8da;
  border-radius: 12px;
  align-items: center;
}

.image {
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 16px;
}

.title {
  font: 600 16px/24px 'Roboto', 'sans-serif', 'arial';
}

.description {
  font: 400 12px/18px 'Roboto', 'sans-serif', 'arial';
}
</style>
