import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Index.vue'
import Menu from '../components/Menu.vue'
import HamburguerItem from '../components/items/HamburguerItem.vue'

Vue.use(VueRouter)

const routes = [
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
