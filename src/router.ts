import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Courses from './views/Courses.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/courses', component: Courses },
  { path: '/projects', component: Projects }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
