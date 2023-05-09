import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Roles from '../views/Roles.vue'
import Anuncios from '../views/Anuncios.vue'
import Usuarios from '../views/Usuarios.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/roles',
    name: 'roles',
    component: Roles
  },
  {
    path: '/anuncios',
    name: 'anuncios',
    component: Anuncios
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: Usuarios
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
