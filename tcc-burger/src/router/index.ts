import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/index.vue'
import Menu from '../components/Menu.vue'
import HamburguerItem from '../components/items/HamburguerItem.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/menu/hamburguer/:id',
    name: 'hamburguer-detalhado',
    component: HamburguerItem
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
