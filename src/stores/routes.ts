import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import routesMocks from '../mocks/routes.json'

export const useRoutesStore = defineStore('routes', {
  state: () => ({
    routes: routesMocks.routes,
    selectedRouteId: 0
  }),

  getters: {
    selectedRoute: (state) => state.routes[state.selectedRouteId]
  }
})
