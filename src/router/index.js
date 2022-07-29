import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import('../views/Mo.vue')
  },
  {
    path: '/tours',
    name: 'tours',
    component: () => import('../views/tours.vue')
  },
  {
    path: '/culture',
    name: 'modal',
    component: () => import('../views/Mo.vue')
  },
  {
    path: '/story',
    name: 'modal',
    component: () => import('../views/Story.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router