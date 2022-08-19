import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Index.vue'
import Menu from '../components/Menu.vue'
import Finalizar from '../components/Finalizar.vue'
import HamburguerDetalhado from '../components/items/HamburguerDetalhado.vue'

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
    component: HamburguerDetalhado
  },
  {
    path: '/finalizar-pedido',
    name: 'finalizar-pedido',
    component: Finalizar
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
