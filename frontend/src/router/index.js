import { createRouter, createWebHistory } from 'vue-router'
import Games from '@/components/Games.vue'

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/Games',
      name: 'Games',
      component: Games
    },

  ]
})

