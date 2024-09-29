import { defineStore } from 'pinia'
import placesMocks from '../mocks/places.json'

export const usePlacesStore = defineStore('places', {
  state: () => ({
    places: placesMocks.places
  }),

  getters: {
    allPlaces: (state) => state.places
  }
})
