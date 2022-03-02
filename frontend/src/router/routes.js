import { createRouter, createWebHistory } from 'vue-router'
import Games from '@/components/layout/Games.vue'

const routes = [
  {
    path: '/',
    name: 'Games',
    component: Games
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

