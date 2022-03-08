import { createRouter, createWebHistory } from 'vue-router'
import Games from '@/components/views/Games.vue'
import PageNotFound from '@/components/views/PageNotFound.vue'

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

