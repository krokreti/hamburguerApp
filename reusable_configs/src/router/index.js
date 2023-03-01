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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/new-calendar',
    name: 'newCalendar',
    component: () => import('../views/NewCalendar.vue')
  },
  {
    path: '/new-configs',
    name: 'Files',
    component: () => import('../views/Files.vue')
  },
  {
    path: '/validator',
    name: 'Validator',
    component: () => import('../views/Validator.vue')
  },
  {
    path: '/big-calendar',
    name: 'BigCalendar',
    component: () => import('../views/BigCalendar.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
