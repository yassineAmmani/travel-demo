import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tours',
    name: 'tours',
    component: () => import('../views/Tours.vue')
  },
  {
    path: '/trip',
    name: 'Trip',
    component: () => import('../views/Trip.vue')
  },
  {
    path: '/story',
    name: 'Story',
    component: () => import('../views/Story.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router