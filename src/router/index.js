import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Store from '../views/Store.vue'
import ItemStore from '../views/ItemStore.vue'
import Inventory from '../views/Inventory.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/store',
    name: 'Loja',
    component: Store
  },
  {
    path: '/item/store',
    name: 'Loja de Itens',
    component: ItemStore
  },
  {
    path: '/inventory',
    name: 'Inventario',
    component: Inventory
  },
]

const router = new VueRouter({
  routes
})

export default router
