<script setup lang="ts">
const props = defineProps(['selectedRoute'])
</script>

<template>
  <div class="route-details">
    <div class="row">
      <div class="detail">
        <h2>{{ props.selectedRoute.distance }}</h2>
        <p>Odległość</p>
      </div>

      <div class="detail">
        <h2>{{ props.selectedRoute.elevationGain }}</h2>
        <p>Przewyższenie</p>
      </div>
    </div>

    <div class="row">
      <div class="detail">
        <h2>{{ props.selectedRoute.duration }}</h2>
        <p>Szacowany czas</p>
      </div>

      <div class="detail">
        <h2>test</h2>
        <p>Szlak pętlowy</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.route-details {
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;
}

.row {
  display: flex;
  gap: 16px;
}

.detail {
  flex: 1;
}

h2 {
  font: 500 32px/42px 'Roboto';
}

p {
  font: 400 14px/16px 'Roboto';
}
</style>
