import { createRouter, createWebHistory } from 'vue-router'
import Games from '@/components/layout/Games.vue'
import PageNotFound from '@/components/layout/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Games',
    component: Games
  },
  { path: '/:catchAll(.*)*', component: PageNotFound }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

