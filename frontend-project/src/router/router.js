import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProdutosView from '../views/ProdutosView.vue'
import ProdutoFormView from '../views/ProdutoFormView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/produtos', component: ProdutosView },
  { path: '/formulario', component: ProdutoFormView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router