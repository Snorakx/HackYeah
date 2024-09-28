import { defineStore } from 'pinia'
import routesMocks from '../mocks/routes.json'

export const useRoutesStore = defineStore('routes', {
  state: () => ({
    routes: routesMocks.routes,
    selectedRouteId: 0
  }),

  getters: {
    selectedRoute: (state) => state.routes[state.selectedRouteId],
    allRoutes: (state) => state.routes
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    selectRoute(id: number) {
      this.selectedRouteId = id
    }
  }
})
