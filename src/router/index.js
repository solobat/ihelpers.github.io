import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/automations',
    name: 'Automations',
    component: () => import(/* webpackChunkName: "automations" */ '../views/Automations.vue'),
  },
  {
    path: '/create',
    name: 'AutomationCreate',
    component: () => import(/* webpackChunkName: "create" */ '../views/Create.vue'),
  }
]

const router = new VueRouter({
  mode: process.env.NODE_ENV === 'production' ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
