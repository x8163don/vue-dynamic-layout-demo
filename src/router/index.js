import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

const LAYOUT = {
  SIDE_BAR: "sidebar",
  FULL_SCREEN:"full-screen"
}

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/error/404',
    name: '404',
    meta: {layout: LAYOUT.FULL_SCREEN},
    component: () => import('@/views/common/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
