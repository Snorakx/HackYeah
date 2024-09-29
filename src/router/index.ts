import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import RouteDetailsView from '@/views/RouteDetailsView.vue'
import LoginView from '../views/LoginView.vue'
import SearchView from '@/views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
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
    }
  ]
})

export default router
