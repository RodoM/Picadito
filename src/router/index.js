import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ModalitiesView from '../views/ModalitiesView.vue'
import ModalityView from '../views/ModalityView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/modalidades',
    name: 'modalities',
    component: ModalitiesView
  },
  {
    path: '/modalidades/futbol:modalidad',
    name: 'modalidad',
    component: ModalityView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
