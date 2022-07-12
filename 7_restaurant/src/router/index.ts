import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Pedidos from '../components/Pedidos.vue'
import Cardapio from '../components/Cardapio.vue'
import ItemDetalhado from '../components/ItemDetalhado.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: Pedidos
  },
  {
    path: '/cardapio',
    name: 'cardapio',
    component: Cardapio
  },
  {
    path: '/item-detalhado/:id',
    name: 'item-detalhado',
    component: ItemDetalhado
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
