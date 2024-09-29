import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import RouteDetailsView from '@/views/RouteDetailsView.vue'
import LoginView from '../views/LoginView.vue'
import SearchView from '@/views/SearchView.vue'
import MapView from '@/views/MapView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
    },
    {
      path: '/route-details',
      name: 'details',
      component: RouteDetailsView
    },
    {
      path: '/home',
      name: 'main',
      component: MainView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/map',
      name: 'map',
      component: MapView
    }
  ]
})

export default router
