import { createRouter, createWebHistory } from 'vue-router'
import Games from '@/components/layout/Games.vue'

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Games',
      component: Games
    },
  ]
})

