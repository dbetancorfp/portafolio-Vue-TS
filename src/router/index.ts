import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import About from '../components/AboutComponent.vue'
import Projects from '../components/ProjectsComponent.vue'
import Skills from '../components/HabilidadesComponent.vue'
import Experience from '../components/ExperienceComponent.vue'
import Contact from '../components/ContactComponent.vue'
import Error404 from '../components/Error404Component.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/aboutme' },
  { path: '/aboutme', component: About },
  { path: '/projects', component: Projects },
  { path: '/skills', component: Skills },
  { path: '/experience', component: Experience },
  { path: '/contact', component: Contact },
  { path: '/:pathMatch(.*)*', component: Error404 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
