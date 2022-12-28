import { createRouter, createWebHashHistory } from 'vue-router'

import { RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/chapter1/',
    children: [
      {
        path: '01-container',
        component: () => import('@/views/chapter1-basic/01-container.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
