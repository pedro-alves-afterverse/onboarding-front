import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../views/Store.vue'
import ItemStore from '../views/ItemStore.vue'
import Inventory from '../views/Inventory.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
