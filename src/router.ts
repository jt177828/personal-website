import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import Courses from './views/Courses.vue'

const routes = [
  { path: '/', component: Home, meta: {title: 'Home'} },
  {path: '/about', component: About, meta: {title: 'About'}},
  { path: '/courses', component: Courses, meta: {title: 'Courses'}},
  { path: '/projects', component: Projects, meta: {title: 'Projects'} }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
